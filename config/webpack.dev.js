'use strict';

const path = require( 'path' );
const merge = require( 'webpack-merge' );
const common = require( './webpack.common.js' );
const config = require( './app.config' );

module.exports = merge( common, {

    devServer: {
        contentBase: path.join( process.cwd(), config.app.build )
    },
    mode: 'development'
} );