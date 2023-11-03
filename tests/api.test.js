import app from '../src/server/app'
import request from 'supertest'
import mongoose from 'mongoose'
import BlogPostModel from '../src/server/models/blogpost'
import { initializeBlogDatabase } from './utils/blogpost'

beforeAll(done => {
  done()
})

afterAll(done => {
  mongoose.connection.close()
  done()
})


describe('Test blogpost endpoint', () => {
  
  beforeAll(() => {
    return initializeBlogDatabase();
  });

  test("GET /api/blogpost/all should return all blogpost IDs", () => {
    return request(app)
      .get("/api/blogpost/all")
      .expect(200)
      .expect('Content-Type', /json/)
      .expect({
        blogpost_ids: []
      })
  })
  test("GET /api/blogpost/:id/read should return all blogpost with that id", () => {
    return request(app)
      .get("/api/blogpost/0/read")
      .expect(200)
      .expect('Content-Type', /json/)
      .expect({
        _id: 0
      })
  })
});