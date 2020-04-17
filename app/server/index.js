const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const statusCodes = require('http').STATUS_CODES;

const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('../routes');

const server = express();
server.use(helmet());
server.use(morgan('dev'));

const corsOptions = {
  origin: '*',
  allowMethods: 'GET,PUT,POST,DELETE,OPTIONS',
};
server.use(cors(corsOptions));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// server.use(express.json());

server.use('/api', routes);

// Invalid route handler (404)
server.use((req, res) => {
  console.error(`Resource '${req.path}' not found!`);
  res.status(404).json({ error: statusCodes[404] });
});

// Error handler
// server.use((err, req, res, next) => {
//   res.status(500).json({ error: `${err.message} See logs for details` });
//   next(err);
// });

module.exports = server;
