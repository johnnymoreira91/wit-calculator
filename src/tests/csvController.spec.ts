import app from '../server'
import request from 'supertest'

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

describe('should test the calculator', () => {
  it('should test csv Controller', async () => {
    let res = await agent.post('/admin/importCsv').send({
      importCsv: false,
      cronTime: '20 * * * *'
    })
    let body = res.body
    expect(res.statusCode).toBe(200)
    expect(body.importCsv).toBe(false)
    expect(body.cronTime).toBe('20 * * * *')
  });

  it('should test csv Controller without cronTime', async () => {
    let res = await agent.post('/admin/importCsv').send({
      importCsv: true
    })
    let body = res.body
    expect(res.statusCode).toBe(200)
    expect(body.importCsv).toBe(true)
    expect(body.cronTime).toBe('10 * * * *')
  });

})