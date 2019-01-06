'use strict';

const config = require("../../config/default.json");

const s = new Server();

module.exports = {Server: s};

module.exports = () => {

    try {

        const custom = process.argv[2] || 'default';
        const local = require(`../../config/${custom}`);
        const configuration = {...config, ...local};

        process.env.CONFIG = JSON.stringify(configuration);
        logger.environment.info(`process.env.CONFIG: ${process.env.CONFIG}`);
        return true;
    } catch (e) {

        logger.environment.error(`initialization error: ${e}`);
        return false;
    }
};
