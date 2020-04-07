const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const cors = require('cors');
const routes = require('../routes');
const bodyParser = require('body-parser');

const server = express();
server.use(helmet());
server.use(morgan('dev'));

const corsOptions = {
  origin: '*',
  allowMethods: 'GET,PUT,POST,DELETE,OPTIONS',
};
server.use(cors(corsOptions));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended : true}));

// server.use(express.json());

server.use('/api', routes);

module.exports = server;
