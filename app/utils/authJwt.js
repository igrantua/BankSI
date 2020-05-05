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
  const userRoles = await user.getRoles();
  for (let i = 0; i < userRoles.length; i++) {
    if (userRoles[i].name === 'Admin') {
      next();
      return;
    }
  }

  res.status(403).send({
    message: 'Require Admin Role!',
  });
};

const isModerator = async (req, res, next) => {
  const user = await User.findByPk(req.userId);
  const userRoles = await user.getRoles();
  for (let i = 0; i < userRoles.length; i++) {
    if (userRoles[i].name === 'Moderator') {
      next();
      return;
    }
  }

  res.status(403).send({
    message: 'Require Moderator Role!',
  });
};

const isModeratorOrAdmin = async (req, res, next) => {
  const user = await User.findByPk(req.userId);
  const userRoles = await user.getRoles();
  for (let i = 0; i < userRoles.length; i++) {
    if (userRoles[i].name === 'Moderator') {
      next();
      return;
    }
    if (userRoles[i].name === 'Admin') {
      next();
      return;
    }
  }
  res.status(403).send({
    message: 'Require Moderator or Admin Role!',
  });
};

module.exports = {
  verifyToken,
  isAdmin,
  isModerator,
  isModeratorOrAdmin,
};
