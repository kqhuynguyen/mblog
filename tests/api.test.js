import app from '../src/server/app'
import request from 'supertest'
import db from '../src/server/adapters/orm'
import { initBlogCollection, deleteBlogCollection } from './utils/blogpost'

beforeAll(done => {
  done()
})

afterAll(done => {
  db.connection.close()
  done()
})


describe('Test blogpost endpoint', () => {

  beforeAll(() => {
    return deleteBlogCollection()
    .then(res => {
      return initBlogCollection()
    })
  });

  test("GET /api/blogpost/all should return all blogpost IDs", () => {
    return request(app)
      .get("/api/blogpost/all")
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(response => {
        expect(response.body.blogpost_ids).toBeInstanceOf(Array)
      }) 
  })
  test("GET /api/blogpost/:id/read should return all blogpost with that id", () => {
    return request(app)
      .get("/api/blogpost/65451a4b0e1bd1cfac438b90/read")
      .expect(200)
      .expect('Content-Type', /json/)
      .expect(response => {
        expect(response.body.title).toBe("Blog post 1")
      })
  })
});