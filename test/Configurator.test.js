'use strict';

const assert = require('assert');
const {Configurator} = require("../utils/lib/Configurator");

describe('Configurator setConfig method', () => {

    it('should set default process.env.CONFIG property as a JSON string', () => {

        let localfilename = 'default';
        let localJSON = require(`../config/${localfilename}`);
        let sortable = {};

        Object.keys(localJSON)
            .sort((a, b) => {
                return localJSON[a] - localJSON[b]
            })
            .map(key => sortable[key] = localJSON[key]);
        Configurator.setConfig();
        assert.equal(process.env.CONFIG, JSON.stringify(localJSON));
    });

    it('should set custom process.env.CONFIG property as a JSON string', () => {

        let localfilename = 'default';
        let localJSON = require(`../config/${localfilename}`);
        let customJSON = {"web": {"address": "10.127.0.81", "port": "8000"}};
        let merged = {...localJSON, ...customJSON};
        let sortable = {};

        Object.keys(merged)
            .sort((a, b) => {
                return merged[a] - merged[b]
            })
            .map(key => sortable[key] = merged[key]);
        Configurator.customConfigFile = customJSON;
        Configurator.setConfig();
        assert.equal(process.env.CONFIG, JSON.stringify(merged));
    });
});