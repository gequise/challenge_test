const supertest = require('supertest');
const host = 'https://api.rebill.to/v2/auth/login/'
const request = supertest(host)

let token;
beforeAll((done) => {
    request
    .post('test01')
    .send({
        email: 'test@test.com',
        password: 'Password123!',
    })
    .end((err, response)=> {
        if (err) throw err;
        token = response.body.token;
        console.log(token);
        done();
    });
});


describe('Get token', ()=>{
    test('should have a token', async ()=>{
        const response = await request.get('test01');
        expect(response.statusCode).toBe(200);
    });
});

describe('get user with token', () =>{
    it('Should get a user'), async () =>{
        return await request.get('test01')
        .set('')
    }
}
)
