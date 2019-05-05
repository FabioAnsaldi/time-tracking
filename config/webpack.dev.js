'use strict';

const path = require( 'path' );
const webpack = require('webpack');
const merge = require( 'webpack-merge' );
const common = require( './webpack.common.js' );
const config = require( './app.config' );

module.exports = merge( common, {

    plugins: [

        new webpack.DefinePlugin({
            'process.env': {

                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            },
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'eval-source-map',
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
