var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('./server');
chai.should();
chai.use(chaiHttp);
describe('Movie-Api', function () {
    describe('Get /api/v1/user', function () {
        it('It should GET all users', function (done) {
            chai.request(server).get('/api/v1/user')
                .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
        it('It should Not GET all users', function (done) {
            chai.request(server).get('/api/v1/use')
                .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
        });
    });
    describe('Get /api/v1/user/:id', function () {
        it('It should GET one users', function (done) {
            var userId = '617f4391acb4f3df25f94d1d';
            chai.request(server).get('/api/v1/user/' + userId)
                .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
    });
    describe('POST /api/v1/user', function () {
        it('It should create a new user', function (done) {
            var user = {
                firstname: "Boss",
                lastname: "Amiaya"
            };
            chai.request(server)
                .post('/api/v1/user')
                .send(user)
                .end(function (err, res) {
                res.should.have.status(201);
                res.body.should.be.a('object');
                done();
            });
        });
        it('It should Not create a new user', function (done) {
            var user = {
                firstname: "Boss",
                lastname: "Amiaya"
            };
            chai.request(server)
                .post('/api/v1/use')
                .send(user)
                .end(function (err, res) {
                res.should.have.status(404);
                done();
            });
        });
    });
    describe('PATCH /api/v1/user', function () {
        it('It should patch user', function (done) {
            var userId = '617f4391acb4f3df25f94d1d';
            var user = {
                firstname: "Boss",
                lastname: "Amiaya"
            };
            chai.request(server)
                .patch('/api/v1/user/' + userId)
                .send(user)
                .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
    });
    describe('DELETE /api/v1/user', function () {
        it('It should delete user', function (done) {
            var userId = '617f4391acb4f3df25f94d1d';
            var user = {
                firstname: "Boss",
                lastname: "Amiaya"
            };
            chai.request(server)
                .patch('/api/v1/user/' + userId)
                .send(user)
                .end(function (err, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
        });
    });
});
