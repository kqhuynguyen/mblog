import app from '../src/server/app'
import request from 'supertest'

describe('Test blogpost endpoint', () => {
  test("GET /api/blogpost/all should return all blogpost IDs", () => {
    return request(app)
      .get("/api/blogpost/all")
      .then(response => {
        expect(response.statusCode).toBe(200)
        expect(response.text).toBe("all ids")
      });
  })
});