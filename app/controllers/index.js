const { sequelize, User, Idea, Comment, Category, Status, Region, Target, TargetGroup  } = require('../models');

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

module.exports = {
  createIdea,
}
