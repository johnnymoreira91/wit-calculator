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
  it('should test plus route (-)', async () => {
    let res = await agent.post('/calculator/minus').send({
      numberOne: 10,
      numberTwo: 5
    })
    let body = res.body
    expect(res.statusCode).toBe(200)
    expect(body.result).toBe('10 - 5 = 5')
    expect(body.operation).toBe('-')
  });

  it('should test numberTwo = null', async () => {
    let res = await agent.post('/calculator/minus').send({
      numberOne: 10
    })
    let body = res.body
    expect(res.statusCode).toBe(404)
    expect(body).toBe('one of numbers is null')
  });

  it('should test numberTwo === string', async () => {
    let res = await agent.post('/calculator/minus').send({
      numberOne: 10,
      numberTwo: 'a'
    })
    let body = res.body
    expect(res.statusCode).toBe(400)
    expect(body).toBe('you put a string, change to number')
  });

  it('should test numberTwo === string and numberOne as a string', async () => {
    let res = await agent.post('/calculator/minus').send({
      numberOne: '10',
      numberTwo: 'a'
    })
    let body = res.body
    expect(res.statusCode).toBe(400)
    expect(body).toBe('you put a string, change to number')
  });


  it('should test numberOne and numberTwo = null', async () => {
    let res = await agent.post('/calculator/minus').send({})
    expect(res.statusCode).toBe(404)
  });

  it('should test numberOne and numberTwo === string', async () => {
    let res = await agent.post('/calculator/minus').send({
      numberOne: 'b',
      numberTwo: 'a'
    })
    let body = res.body
    expect(res.statusCode).toBe(400)
    expect(body).toBe('you put a string, change to number')
  });

})