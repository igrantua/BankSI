const { TargetGroup } = require('../models');

const createTargetGroup = async (req, res) => {
  try {
    const targetGroup = await TargetGroup.create(req.body);
    return res.status(201).json({
      targetGroup,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllTargetGroups = async (req, res) => {
  try {
    const targetGroups = await TargetGroup.findAll();
    return res.status(200).json({ targetGroups });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getTargetGroupById = async (req, res) => {
  try {
    const { targetGroupId } = req.params;
    const targetGroup = await TargetGroup.findOne({
      where: { id: targetGroupId },
    });
    if (targetGroup) {
      return res.status(200).json({ targetGroup });
    }
    return res.status(404).send('TargetGroup with the specified ID does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const updateTargetGroup = async (req, res) => {
  try {
    const { targetGroupId } = req.params;
    const updated = await TargetGroup.update(req.body, {
      where: { id: targetGroupId },
    });
    if (updated) {
      const updatedTargetGroup = await TargetGroup.findOne({ where: { id: targetGroupId } });
      return res.status(200).json({ updatedTargetGroup });
    }
    throw new Error('TargetGroup not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deleteTargetGroup = async (req, res) => {
  try {
    const { targetGroupId } = req.params;
    const deleted = await TargetGroup.destroy({
      where: { id: targetGroupId },
    });
    if (deleted) {
      return res.status(204).send('TargetGroup deleted');
    }
    throw new Error('TargetGroup not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createTargetGroup,
  getAllTargetGroups,
  getTargetGroupById,
  updateTargetGroup,
  deleteTargetGroup,
};
