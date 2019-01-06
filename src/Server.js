'use strict';

const {Configurator} = require("./lib/Configurator");
const express = require('express');

class Server {
    /**
     * Constructs Server object.
     * @constructor
     */
    constructor() {

        Configurator.setConfig();
        this.app = express();
    }

    /**
     * Constructs configuration object.
     * @constructor
     */
    start() {

        try {

            let {web} = JSON.parse(process.env.CONFIG);
            this.instance = web;
            return true;
        } catch (e) {

            console.log(`Server::start error: ${e}`);
            return false;
        }
    }

    /**
     * Set app property.
     * @param {object} module is a name of the module server.
     */
    set app(module) {

        this._app = module;
    }

    /**
     * Get app property.
     * @return {function} a module application property
     */
    get app() {

        return this._app;
    }

    /**
     * Set server instance.
     * @param {object} config is a name of the config server properties.
     */
    set instance(config) {

        this._instance = this.app.listen(config.port, config.address, () => {

            console.log(`Server listening on http://${config.address}:${config.port}/`);
        });
    }

    /**
     * Get server instance.
     * @return {object} a object server instance
     */
    get instance() {

        return this._instance;
    }
}

const s = new Server();

module.exports = {Server: s};
