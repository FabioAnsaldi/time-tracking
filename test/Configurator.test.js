'use strict';

const assert = require('assert');
const {Configurator} = require("../../src/lib/Configurator");

describe('Configurator setConfig method', () => {

    before(() => {

        Configurator.setConfig();
    });

    it('should set process.env.CONFIG property as a JSON', () => {

        assert.equal(process.env.CONFIG, {});
    });
});