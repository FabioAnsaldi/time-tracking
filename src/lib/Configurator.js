'use strict';

/**
 * Configurator Class.
 * @type {Configurator}
 */

class Configurator {
    /**
     * Constructs Configurator object.
     * @constructor
     */
    constructor() {

        let filename = process.argv[2] || 'default';
        let localfilename = 'default.json';

        this.customConfigFile = require(`../../config/${filename}`);
        this.localConfigFile = require(`../../config/${localfilename}`);
    }

    /**
     * Set configuration property.
     */
    setConfig() {

        try {

            this.configuration = {...this.customConfigFile, ...this.localConfigFile};
            process.env.CONFIG = JSON.stringify(this.configuration);
            return true;
        } catch (e) {

            console.log(`Configurator::setConfig error: ${e}`);
            return false;
        }
    }

    /**
     * Set custom configuration property.
     * @param {string} filename is a name of the file.
     */
    set customConfigFile(filename) {

        this._customConfigFile = filename;
    }

    /**
     * Get custom configuration property.
     * @return {object} a JSON configuration property
     */
    get customConfigFile() {

        return this._customConfigFile;
    }

    /**
     * Set local configuration property.
     * @param {string} customConfig is a name of the file.
     */
    set localConfigFile(customConfig) {

        this._localConfigFile = customConfig;
    }

    /**
     * Get local configuration property.
     * @return {object} a JSON configuration property
     */
    get localConfigFile() {

        return this._localConfigFile;
    }

    /**
     * Set the configuration property.
     * @param {object} config is an object configuration.
     */
    set configuration(config) {

        this._configuration = config;
    }

    /**
     * Get the configuration property.
     * @return {object} a JSON configuration property
     */
    get configuration() {

        return this._configuration;
    }
}

const c = new Configurator();

module.exports = {Configurator: c};
