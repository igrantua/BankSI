const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const secret = require('../config/auth.config');

const createUser = async (req, res) => {
  try {
    const newUser = await User.create({
      userName: req.body.userName,
      email: req.body.email,
      mobile: req.body.mobile,
      password: req.body.password,
      avatar: req.file.buffer,
      roleId: req.body.roleId || '1', // user is default role (1), admin is (2).
    });
    return res.status(201).json({
      newUser,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({
      // attributes: ['userName', 'email', 'mobile', 'password', 'avatar'],
      where: { email: req.body.email },
    });
    if (!user) {
      return res.status(404).send({ message: 'User not found.' });
    }
    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid Password!',
      });
    }
    const token = jwt.sign({ id: user.id }, secret, {
      expiresIn: '24h',
    });
    return res.status(201).json({
      user,
      token,
      message: 'create user successfully',
    });
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
  loginUser,
  getAllUsers,
  getUserById,
  getUserByEmail,
  updateUser,
  deleteUser,
};
