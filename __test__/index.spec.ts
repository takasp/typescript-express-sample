const request = require('supertest');
const index = require('../src/index');

describe('GET /', () => {
  it('response Hello World!', async () => {
    const response = await request(index).get('/');
    expect(response.text).toEqual('Hello World!');
  });
});
