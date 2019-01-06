'use strict';

const assert = require('assert');
const {Configurator} = require("../src/lib/Configurator");

describe('Configurator setConfig method', () => {

    before(() => {

        Configurator.setConfig();
    });

    it('should set default process.env.CONFIG property as a JSON string', () => {

        let localfilename = 'default.json';
        let localJSON = require(`../config/${localfilename}`);
        assert.equal(process.env.CONFIG, JSON.stringify(localJSON));
    });

    it('should set custom process.env.CONFIG property as a JSON string', () => {

        let localfilename = 'default.json';
        let localJSON = require(`../config/${localfilename}`);
        let customJSON = {"web": {"address": "192.168.1.1", "port": "9000"}};
        assert.equal(process.env.CONFIG, JSON.stringify({...customJSON, ...localJSON}));
    });
});