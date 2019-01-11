'use strict';

const {Server} = require("./utils/Server");

Server.start();

Server.setStaticRoute('/ciao', '/test');

let handle1 = (req, res) => res.send('Hello World!');
Server.setGetter('/get', handle1);

let handle2 = (req, res) => res.json({message: 'ok'});
Server.setPoster('/post', handle2);