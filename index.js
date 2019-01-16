'use strict';

const history = require('connect-history-api-fallback');
const {Server} = require("./utils/Server");
const config = require('./config/app.config.json');

const bundleRegex = new RegExp(`^\\/\\d+\\.(${config.app.bundle.replace('.js', '')})\\..+`);
const historyOption = {

    verbose: true,
    index: config.app.publicPath + 'index.html',
    rewrites: [
        {from: '/' + config.app.bundle, to: '/' + config.app.bundle},
        {
            from: bundleRegex, to: (context) => {

                return context.parsedUrl.pathname;
            }
        },
        {from: 'manifest.json', to: '/manifest.json'},
        {from: /^\/.*$/, to: '/'}
    ],
    disableDotRule: true
};
Server.app.use(history(historyOption));
Server.setStaticRoute('/', '/dist');
Server.start();

/*
let handle1 = (req, res) => res.send('Hello World!');
Server.setGetter('/get', handle1);
let handle2 = (req, res) => res.json({message: 'ok'});
Server.setPoster('/post', handle2);
*/