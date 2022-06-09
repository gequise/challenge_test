const supertest = require('supertest');
const host = 'https://api.rebill.dev/'
const request = supertest(host)

const rand = 'test_' + Math.random().toString(16).substr(2, 4) + '_alias';
console.log(rand);


describe('SIgn up', () => {
    it('Sign up appp', async () => {
    const response = await request.post('v2/auth/merchant/signup').send({
        organization: {name: 'test2021', alias: rand},
        user: {email: 'test@test.com', password: 'Password123!'}
    });
    expect(response.statusCode).toBe(201);
    });
});