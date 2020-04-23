const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const statusCodes = require('http').STATUS_CODES;
const session = require('express-session')({
  secret: '40000monkeysgobananas',
  cookie: {},
  resave: false,
  saveUninitialized: false,
});
const passport = require('passport');
// const strategy = require('../auth');
// const RedisStore = require('connect-redis')(session);

const logger = require('pino-http')({ prettyPrint: true });

const cors = require('cors')({
  origin: '*',
  allowMethods: 'GET,PUT,POST,DELETE,OPTIONS',
});

// const corsOptions = {
//   origin: '*',
//   allowMethods: 'GET,PUT,POST,DELETE,OPTIONS',
// };
const bodyParser = require('body-parser');
const strategy = require('../auth');
const routes = require('../routes');

const server = express();
server.use(helmet());
server.use(morgan('dev'));
server.use(cors);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(session);
passport.use('passport-auth0', strategy);
server.use(passport.initialize());
server.use(passport.session());
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

server.use(logger);
server.use('/api', routes);

// Invalid route handler (404)
server.use((req, res) => {
  console.error(`Resource '${req.path}' not found!`);
  res.status(404).json({ error: statusCodes[404] });
});

// Error handler
server.use((err, req, res, next) => {
  res.status(500).json({ error: `${err.message} See logs for details` });
  next(err);
});

module.exports = server;
