const { Category } = require('../models');

const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.status(201).json({
      category,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json({ categories });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const getCategoryById = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = await Category.findOne({
      where: { id: categoryId },
    });
    if (category) {
      return res.status(200).json({ category });
    }
    return res.status(404).send('Category with the specified ID does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const updateCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const updated = await Category.update(req.body, {
      where: { id: categoryId },
    });
    if (updated) {
      const updatedCategory = await Category.findOne({ where: { id: categoryId } });
      return res.status(200).json({ updatedCategory });
    }
    throw new Error('Category not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deleteCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const deleted = await Category.destroy({
      where: { id: categoryId },
    });
    if (deleted) {
      return res.status(204).send('Category deleted');
    }
    throw new Error('Category not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
