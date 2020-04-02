const { sequelize, User, Idea, Comment, Category, Status, Region, Target, TargetGroup  } = require('../models');

const createTarget = async (req, res) => {
  try {
    const target = await Target.create(req.body);
    return res.status(201).json({
      target,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}
const getAllTargets = async (req, res) => {
  try {
    const targets = await Target.findAll();
    return res.status(200).json({ targets });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const getTargetById = async (req, res) => {
  try {
    const { targetId } = req.params;
    const target = await Target.findOne({
      where: { id: targetId },

    });
    if (target) {
      return res.status(200).json({ target });
    }
    return res.status(404).send('Target with the specified ID does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const updateTarget = async (req, res) => {
  try {
    const { targetId } = req.params;
    const updated = await Target.update(req.body, {
      where: { id: targetId }
    });
    if (updated) {
      const updatedTarget = await Target.findOne({ where: { id: targetId } });
      return res.status(200).json({ updatedTarget });
    }
    throw new Error('Target not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deleteTarget = async (req, res) => {
  try {
    const { targetId } = req.params;
    const deleted = await Target.destroy({
      where: { id: targetId }
    });
    if (deleted) {
      return res.status(204).send("Target deleted");
    }
    throw new Error("Target not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createTarget,
  getAllTargets,
  getTargetById,
  updateTarget,
  deleteTarget
}
