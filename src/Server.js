'use strict';

const express = require('express');
const path = require("path");
const {Configurator} = require("./lib/Configurator");

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
     * Start server instance.
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
     * Stop server instance.
     */
    stop() {

        let {web} = JSON.parse(process.env.CONFIG);

        this.instance.close(() => {

            console.log(`Server stopped on http://${web.address}:${web.port}/`);
        });
    }

    /**
     * Set Static route.
     * @param {string} friendlyRoute is the route of subdirector
     * @param {string} sourcePath is the path of static source code
     */
    setStaticRoute(friendlyRoute, sourcePath) {

        this.app.use(friendlyRoute, express.static(path.join(__dirname, `../${sourcePath}`)));
    }

    /**
     * Set Get route.
     * @param {string} path is the route of subdirector
     * @param {function} handle is the primary handle route
     * @param {function} middleware is the behaviour before primary handle route
     */
    setGetter(path, handle, middleware = null) {

        if (!middleware || typeof middleware !== 'function') {

            middleware = (req, res, next) => {
                next();
            };
        }
        this.app.get(path, middleware, handle);
    }

    /**
     * Set Post route.
     * @param {string} path is the route of subdirector
     * @param {function} handle is the primary handle route
     * @param {function} middleware is the behaviour before primary handle route
     */
    setPoster(path, handle, middleware = null) {

        if (!middleware || typeof middleware !== 'function') {

            middleware = (req, res, next) => {
                next();
            };
        }
        this.app.post(path, middleware, handle);
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
