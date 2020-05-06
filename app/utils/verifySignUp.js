const { User } = require('../models');

const checkUserNameAndEmail = async (req, res, next) => {
  // Username
  const userUsername = await User.findOne({
    where: {
      userName: req.body.userName,
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

// const checkRole = (req, res, next) => {
//   if (req.body.roleId !== 1 && req.body.roleId !== 2) {
//     res.status(400).send({
//       message: `Failed! Role ${req.body.roleId} does not exist `,
//     });
//     return;
//   }
//   next();
// };

module.exports = {
  checkUserNameAndEmail,
  // checkRole,
};
