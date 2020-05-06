/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({
      message: 'No token provided!',
    });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!',
      });
    }
    req.userId = decoded.id;
    next();
  });
};

const isAdmin = async (req, res, next) => {
  const user = await User.findByPk(req.userId);
  if (user.body.roleId === 2) {
    next();
    return;
  }
  res.status(403).send({
    message: 'Require Admin Role!',
  });
};

module.exports = {
  verifyToken,
  isAdmin,
};
