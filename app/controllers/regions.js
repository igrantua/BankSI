const { sequelize, User, Idea, Comment, Category, Status, Region, Target, TargetGroup  } = require('../models');

const createRegion = async (req, res) => {
  try {
    const region = await Region.create(req.body);
    return res.status(201).json({
      region,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}
const getAllRegions = async (req, res) => {
  try {
    const regions = await Region.findAll();
    return res.status(200).json({ regions });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const getRegionById = async (req, res) => {
  try {
    const { regionId } = req.params;
    const region = await Region.findOne({
      where: { id: regionId },

    });
    if (region) {
      return res.status(200).json({ region });
    }
    return res.status(404).send('Region with the specified ID does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const updateRegion = async (req, res) => {
  try {
    const { regionId } = req.params;
    const updated = await Region.update(req.body, {
      where: { id: regionId }
    });
    if (updated) {
      const updatedRegion = await Region.findOne({ where: { id: regionId } });
      return res.status(200).json({ updatedRegion });
    }
    throw new Error('Region not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deleteRegion = async (req, res) => {
  try {
    const { regionId } = req.params;
    const deleted = await Region.destroy({
      where: { id: regionId }
    });
    if (deleted) {
      return res.status(204).send("Region deleted");
    }
    throw new Error("Region not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createRegion,
  getAllRegions,
  getRegionById,
  updateRegion,
  deleteRegion
}
