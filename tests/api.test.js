import app from '../src/server/app'
import request from 'supertest'

describe('Test blogpost endpoint', () => {
  test("GET /api/blogpost/all should return all blogpost IDs", () => {
    return request(app)
      .get("/api/blogpost/all")
      .expect(200)
      .expect('Content-Type', /json/)
      .expect({
        blogpost_ids: []
      })
  })
});