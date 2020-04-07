const { sequelize, User, Idea, Comment, Category, Status, Region, Target, TargetGroup  } = require('../models');
const upload = require('./uploads');
// const formidable = require('formidable');

const createIdea = async (req, res) => {
  try {
    const idea = await Idea.create({
      title: req.body.title,
      body: req.body.body,
      userId: req.body.userId,
      statusId: req.body.statusId,
      likeCount: req.body.likeCount,
      dislikeCount: req.body.dislikeCount,
      image: req.files.image[0].buffer,
      file: req.files.file[0].buffer,
    });
    if (req.body.categoryId) {
      await idea.addCategory(req.body.categoryId);
    }
    if (req.body.regionId) {
      await idea.addRegion(req.body.regionId);
    }
    if (req.body.targetId) {
      await idea.addTarget(req.body.targetId);
    }
    if (req.body.targetGroupId) {
      await idea.addTargetGroup(req.body.targetGroupId);
    }
    newIdea = await Idea.findOne({
      where: { id: idea.id },
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
      ]
    });
    return res.status(201).json({
      newIdea,
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
const getIdeasByStatus = async (req, res) => {
  try {
    const { statusId } = req.params;
    const ideas = await Idea.findAll({
      where: { statusId: statusId },
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
const getIdeasByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const ideas = await Idea.findAll({
      where: { userId: userId },
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

module.exports = {
  createIdea,
  getAllIdeas,
  getIdeasByStatus,
  getIdeasByUser,
  getIdeaById,
  updateIdea,
  deleteIdea,
}
