const { sequelize, User, Idea, Comment, Category, Status, Region, Target, TargetGroup  } = require('../models');

// Ideas

const createIdea = async (req, res) => {
  try {
    const idea = await Idea.create(req.body);
    return res.status(201).json({
      idea,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}
const getAllIdeas = async (req, res) => {
  try {
    const ideas = await Idea.findAll({
      include: [
        {
          model: User,
          as: 'author'
        },
        {
          model: Category,
          as: 'category'
        },
        {
          model: Status,
          as: 'status'
        },
        {
          model: Region,
          as: 'region'
        },
        {
          model: Target,
          as: 'target'
        },
        {
          model: TargetGroup,
          as: 'targetGroup'
        },
        {
          model: Comment,
          as: 'comments'
        }
      ]
    });
    return res.status(200).json({ ideas });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const getIdeaById = async (req, res) => {
  try {
    const { ideaId } = req.params;
    const idea = await Idea.findOne({
      where: { id: ideaId },

    });
    if (idea) {
      return res.status(200).json({ idea });
    }
    return res.status(404).send('Idea with the specified ID does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const updateIdea = async (req, res) => {
  try {
    const { ideaId } = req.params;
    const updated = await Idea.update(req.body, {
      where: { id: ideaId }
    });
    if (updated) {
      const updatedIdea = await Idea.findOne({ where: { id: ideaId } });
      return res.status(200).json({ updatedIdea });
    }
    throw new Error('Idea not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deleteIdea = async (req, res) => {
  try {
    const { ideaId } = req.params;
    const deleted = await Idea.destroy({
      where: { id: ideaId }
    });
    if (deleted) {
      return res.status(204).send("Idea deleted");
    }
    throw new Error("Idea not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
// Categories

const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.status(201).json({
      category,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}
const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json({ categories });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
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
}
const updateCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const updated = await Category.update(req.body, {
      where: { id: categoryId }
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
      where: { id: categoryId }
    });
    if (deleted) {
      return res.status(204).send("Category deleted");
    }
    throw new Error("Category not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createIdea,
  getAllIdeas,
  getIdeaById,
  updateIdea,
  deleteIdea,
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
}
