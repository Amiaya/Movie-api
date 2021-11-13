import chai = require('chai')
import chaiHttp = require('chai-http')
import server = require('./server')
chai.should()
chai.use(chaiHttp)

describe('Movie-Api',() => {
    describe('Get /api/v1/user', () => {
        it('It should GET all users', (done) => {
            chai.request(server).get('/api/v1/user')
            .end((err,res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                done();
            })
        })
        
        it('It should Not GET all users', (done) => {
            chai.request(server).get('/api/v1/use')
            .end((err,res) => {
                res.should.have.status(404)
                done();
            })
        })
    })
    describe('Get /api/v1/user/:id', () => {
        it('It should GET one users', (done) => {
            const userId = '617f4391acb4f3df25f94d1d'
            chai.request(server).get('/api/v1/user/'+ userId)
            .end((err,res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                
                done();
            })
        });
    })

    describe('POST /api/v1/user', () => {
        it('It should create a new user', (done) => {
            const user  = {
                firstname:  "Boss",
                lastname:  "Amiaya"
            }
            chai.request(server)
            .post('/api/v1/user')
            .send(user)
            .end((err,res) => {
                res.should.have.status(201)
                res.body.should.be.a('object')
                done();
            })
        });

        it('It should Not create a new user', (done) => {
            const user  = {
                firstname:  "Boss",
                lastname:  "Amiaya"
            }
            chai.request(server)
            .post('/api/v1/use')
            .send(user)
            .end((err,res) => {
                res.should.have.status(404)
                done();
            })
        });
    })
    

    describe('PATCH /api/v1/user', () => {
        it('It should patch user', (done) => {
            const userId = '617f4391acb4f3df25f94d1d'
            const user  = {
                firstname:  "Boss",
                lastname:  "Amiaya"
            }
            chai.request(server)
            .patch('/api/v1/user/'+ userId)
            .send(user)
            .end((err,res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                done();
            })
        })
    });

    describe('DELETE /api/v1/user', () => {
        it('It should delete user', (done) => {
            const userId = '617f4391acb4f3df25f94d1d'
            const user  = {
                firstname:  "Boss",
                lastname:  "Amiaya"
            }
            chai.request(server)
            .patch('/api/v1/user/'+ userId)
            .send(user)
            .end((err,res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                done();
            })
        })
    });
})