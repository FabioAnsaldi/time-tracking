'use strict';

const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const {Server} = require("../src/Server");

chai.use(chaiHttp);

describe('Server start method', () => {

    before(() => {

        Server.start();
    });

    after(() => {

        Server.instance.close();
    });

    it('should set Express server property', () => {

        assert.equal(typeof Server.instance, 'object');
    });

    it('expect respond with status 404', (done) => {
        chai.request(Server.app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(404);
                done();
            });
    });
});