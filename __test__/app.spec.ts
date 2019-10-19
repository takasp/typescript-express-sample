const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('response Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toEqual('Hello World!');
  });
});
