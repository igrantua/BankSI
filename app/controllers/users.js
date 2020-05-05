const { User } = require('../models');

// register login logout

// const loginUser =

const createUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      const newUser = await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobile: req.body.mobile,
        avatar: req.file.buffer,
      });
      return res.status(201).json({
        newUser,
      });
    }
    throw new Error('User already exists');
  } catch (error) {
    // return next(error);
    return res.status(500).json({ error: error.message });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findOne({
      where: { id: userId },
    });
    if (user) {
      return res.status(200).json({ user });
    }
    return res.status(404).send('User with the specified ID does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getUserByEmail = async (req, res) => {
  try {
    // const { userEmail } = req.body.email;
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    if (user) {
      return res.status(200).json({ user });
    }
    return res.status(404).send('User with the specified email does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const updated = await User.update(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobile: req.body.mobile,
        avatar: req.file.buffer,
      },
      {
        where: { id: userId },
      },
    );
    if (updated) {
      const updatedUser = await User.findOne({ where: { id: userId } });
      return res.status(200).json({ updatedUser });
    }
    throw new Error('User not found');
  } catch (error) {
    // return next(error)
    return res.status(500).send(error.message);
  }
};
const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const deleted = await User.destroy({
      where: { id: userId },
    });
    if (deleted) {
      return res.status(204).send('User deleted');
    }
    throw new Error('User not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  updateUser,
  deleteUser,
};
