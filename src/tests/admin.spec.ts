import app from '../server'
import request from 'supertest'
import { Logger } from '@models/Logger';

let server, agent;

beforeEach((done) => {
    server = app.listen(4000, () => {
       agent = request.agent(server);
       done();
    });
});

afterEach((done) => {
  return  server && server.close(done);
});

describe('should test the admin logger list', () => {
  it('should test csv Controller', async () => {
    let res = await agent.get('/admin//logger/list')
    let body = res.body
    expect(res.statusCode).toBe(200)
  });

  it('should test admin logger list', async () => {
    await Logger.deleteMany()
    let res = await agent.get(`/admin//logger/list`)
    expect(res.statusCode).toBe(200)
  });

})