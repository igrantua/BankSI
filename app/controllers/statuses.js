const { Status } = require('../models');

const createStatus = async (req, res) => {
  try {
    const status = await Status.create(req.body);
    return res.status(201).json({
      status,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllStatuses = async (req, res) => {
  try {
    const statuses = await Status.findAll();
    return res.status(200).json({ statuses });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getStatusById = async (req, res) => {
  try {
    const { statusId } = req.params;
    const status = await Status.findOne({
      where: { id: statusId },
    });
    if (status) {
      return res.status(200).json({ status });
    }
    return res.status(404).send('Status with the specified ID does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const updateStatus = async (req, res) => {
  try {
    const { statusId } = req.params;
    const updated = await Status.update(req.body, {
      where: { id: statusId },
    });
    if (updated) {
      const updatedStatus = await Status.findOne({ where: { id: statusId } });
      return res.status(200).json({ updatedStatus });
    }
    throw new Error('Status not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deleteStatus = async (req, res) => {
  try {
    const { statusId } = req.params;
    const deleted = await Status.destroy({
      where: { id: statusId },
    });
    if (deleted) {
      return res.status(204).send('Status deleted');
    }
    throw new Error('Status not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createStatus,
  getAllStatuses,
  getStatusById,
  updateStatus,
  deleteStatus,
};
