const { User, Role } = require('../models');

const checkUsernameAndEmail = async (req, res, next) => {
  // Username
  const userUsername = await User.findOne({
    where: {
      username: req.body.username,
    },
  });
  if (userUsername) {
    res.status(400).send({
      message: 'Failed! Username is already in use!',
    });
    return;
  }
  const userUserEmail = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (userUserEmail) {
    res.status(400).send({
      message: 'Failed! Email is already in use!',
    });
    return;
  }
  next();
};

const checkRole = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!Role.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist `,
        });
        return;
      }
    }
  }

  next();
};

module.exports = {
  checkUsernameAndEmail,
  checkRole,
};
