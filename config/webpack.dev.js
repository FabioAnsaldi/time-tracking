'use strict';

const path = require( 'path' );
const webpack = require('webpack');
const merge = require( 'webpack-merge' );
const common = require( './webpack.common.js' );
const config = require( './app.config' );

module.exports = merge( common, {

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join( process.cwd(), config.app.build ),
        hot: true,
        historyApiFallback: {
            rewrites: [
                {from: config.app.bundle, to: '/' + config.app.bundle},
                {from: 'manifest.json', to: '/manifest.json'},
                {from: /^\/.*$/, to: '/'}
            ]
        }
    },
    mode: 'development'
} );