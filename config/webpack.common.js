'use strict';

const path = require( 'path' );
const webpack = require('webpack');
const config = require( './app.config' );
const appConfig = require('./default');

module.exports = {

    entry: [

        path.join( process.cwd(), config.app.source + '/index.js' )
    ],
    module: {

        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {

        extensions: ['*', '.js', '.jsx']
    },
    output: {

        path: path.join( process.cwd(), config.app.build ),
        filename: config.app.bundle,
        publicPath: config.app.publicPath
    },
    plugins: [

        new webpack.DefinePlugin({

            'process.env': {

                API_URL: JSON.stringify(appConfig)
            },
        })
    ],
};
