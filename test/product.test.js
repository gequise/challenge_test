const supertest = require('supertest');
const host = 'https://api.rebill.to/v2/'
const request = supertest(host)

beforeAll(() => console.log('1 - beforeAll'));

describe('Get all products', ()=>{
    it('should get all our products', async () =>{
        const response = await request.get('message-templates')
        expect(response.statusCode).toBe(200);
        console.log(response)
        expect((await response).body).not.tobeNull();
        expect((response).body).toEqual(expect.arrayContaining(response.body))
    });
});