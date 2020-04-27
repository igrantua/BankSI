const express = require('express');
// const uuid = require('uuid/v4');
const helmet = require('helmet');
const morgan = require('morgan');
const statusCodes = require('http').STATUS_CODES;

const session = require('express-session');

const FileStore = require('session-file-store')(session);
const bodyParser = require('body-parser');
const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const strategy = require('../auth');

// const RedisStore = require('connect-redis')(session);

const logger = require('pino-http')({ prettyPrint: true });

const cors = require('cors')({
  origin: '*',
  allowMethods: 'GET,PUT,POST,DELETE,OPTIONS',
});

const strategy = require('../auth');
const routes = require('../routes');

// configure passport.js to use the local strategy
passport.use('passport-local', strategy);

// here is where you make a call to the database
// to find the user based on their username or email address
// for now, we'll just pretend we found that it was users[0]
// const user = users[0];
//     if (email === user.email && password === user.password) {
//       console.log('Local strategy returned true');
//       return done(null, user);
//     }
//   }),
// );

// tell passport how to serialize the user
passport.serializeUser((user, done) => {
  console.log('Inside serializeUser callback. User id is save to the session file store here');
  done(null, user.id);
});

const server = express();
server.use(helmet());
server.use(morgan('dev'));
server.use(cors);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(
  session({
    store: new FileStore(),
    secret: '40000monkeysgobananas',
    resave: false,
    saveUninitialized: true,
  }),
);

// ({
//   secret: '40000monkeysgobananas',
//   store: new FileStore(),
//   cookie: {},
//   resave: false,
//   saveUninitialized: false,
// });
// passport.use('passport-local', new LocalStrategy());
// server.use(passport.initialize());
// server.use(passport.session());
// passport.serializeUser((user, done) => {
//   done(null, user);
// });

// passport.deserializeUser((user, done) => {
//   done(null, user);
// });

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
