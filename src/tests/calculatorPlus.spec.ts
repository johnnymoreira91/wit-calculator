const request = require("supertest");
const app = require("../index");
const mongoDB = require('../database/index')

// describe("Test the root path", () => {
//   test("It should response the GET method", done => {
//     request(app)
//       .get("/")
//       .then(response => {
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });

// });

describe("Test the root path", async() => {
  beforeAll(async() => {
    mongoDB.connect();
  });

  afterAll(async(done) => {
    mongoDB.disconnect(done);
  });
  test("It should response the GET method", async() => {
    return request(app)
      .get("/admin/logger/list")
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});