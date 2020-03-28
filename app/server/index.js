const express = require('express');
const routes = require('../routes');
const bodyParser = require('body-parser');

const server = express();

// server.use(bodyParser.json());
// server.use(bodyParser.urlencoded({extended : true}));

server.use(express.json());

server.use('/api', routes);

module.exports = server;
