const LocalStrategy = require('passport-local').Strategy;
const { User } = require('../models');

const strategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  // eslint-disable-next-line func-names
  function(email, password, done) {
    User.findOne({ where: { username: email } }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (password !== user.password) {
        return done(null, false);
      }
      return done(null, user);
    });
  },
);

module.exports = strategy;

// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcrypt');

// function initialize(passport, getUserByEmail, getUserById) {
//   const authenticateUser = async (email, password, done) => {
//     const user = getUserByEmail(email);
//     if (user == null) {
//       return done(null, false, { message: 'No user with that email' });
//     }

//     try {
//       if (await bcrypt.compare(password, user.password)) {
//         return done(null, user);
//       }
//       return done(null, false, { message: 'Password incorrect' });
//     } catch (err) {
//       return done(err);
//     }
//   };

//   passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));
//   passport.serializeUser((user, done) => done(null, user.id));
//   passport.deserializeUser((id, done) => {
//     return done(null, getUserById(id));
//   });
// }

// module.exports = initialize;
