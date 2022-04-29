import app from '../server'
import request from 'supertest'
import { Logger } from '@models/Logger'

let server, agent;

beforeEach((done) => {
  server = app.listen(4000, () => {
    agent = request.agent(server);
    done();
  });
});

afterEach((done) => {
  return server && server.close(done);
});

describe('should test the validation', () => {
  it('should test validation with id', async () => {
    let findOneId = await Logger.findOne({})
    let res = await agent.get(`/calculator/validation/${findOneId.id}`)
    expect(res.statusCode).toBe(200)
  });

  it('should test validation with id invalid', async () => {
    let res = await agent.get(`/calculator/validation/9999999`)
    expect(res.statusCode).toBe(404)
  });

  it('should test validation with id', async () => {
    await Logger.deleteMany()
    let findOneId = await Logger.findOne({})
    let res = await agent.get(`/calculator/validation/${findOneId?.id}`)
    expect(res.statusCode).toBe(404)
  });

})