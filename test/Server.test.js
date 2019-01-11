'use strict';

const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const {Server} = require("../utils/Server");

chai.use(chaiHttp);

describe('Server start method', () => {

    before(() => {

        Server.start();
    });

    after(() => {

        Server.stop();
    });

    it('should set Express server property', () => {

        assert.equal(typeof Server.instance, 'object');
    });

    it('expect respond with status 404 for route /404', (done) => {

        chai.request(Server.app)
            .get('/404')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });

    it('expect respond with status 200 for route /', (done) => {

        Server.setStaticRoute('/works', '/test');
        chai.request(Server.app)
            .get('/works')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('expect respond with status 200 for route /get', (done) => {

        let handle = (req, res) => res.send('Hello World!');

        Server.setGetter('/get', handle);
        chai.request(Server.app)
            .get('/get')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('expect respond with status 200 for route /post', (done) => {

        let handle = (req, res) => res.json({message: 'ok'});

        Server.setPoster('/post', handle);
        chai.request(Server.app)
            .post('/post')
            .send({})
            .end((err, res) => {
                expect(res).to.have.status(200);
                assert.equal(typeof res.body, 'object');
                done();
            });
    });
});