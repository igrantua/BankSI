const { sequelize, User, Idea, Comment, Category, Status, Region, Target, TargetGroup, Aim  } = require('../models');


// Users
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
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
}
const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const updated = await User.update(req.body, {
      where: { id: userId }
    });
    if (updated) {
      const updatedUser = await User.findOne({ where: { id: userId } });
      return res.status(200).json({ updatedUser });
    }
    throw new Error('User not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const deleted = await User.destroy({
      where: { id: userId }
    });
    if (deleted) {
      return res.status(204).send("User deleted");
    }
    throw new Error("User not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Ideas

const createIdea = async (req, res) => {
  try {
    const idea = await Idea.create(req.body);
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

// Comments
const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    return res.status(201).json({
      comment,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    return res.status(200).json({ comments });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const getCommentById = async (req, res) => {
  try {
    const { commentId } = req.params;
    const comment = await Comment.findOne({
      where: { id: commentId },

    });
    if (comment) {
      return res.status(200).json({ comment });
    }
    return res.status(404).send('Comment with the specified ID does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
const updateComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const updated = await Comment.update(req.body, {
      where: { id: commentId }
    });
    if (updated) {
      const updatedComment = await Comment.findOne({ where: { id: commentId } });
      return res.status(200).json({ updatedComment });
    }
    throw new Error('Comment not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const deleted = await Comment.destroy({
      where: { id: commentId }
    });
    if (deleted) {
      return res.status(204).send("Comment deleted");
    }
    throw new Error("Comment not found");
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

// Regions
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

// Targets

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

// TargetGroups

const createTargetGroup = async (req, res) => {
  try {
    const targetGroup = await TargetGroup.create(req.body);
    return res.status(201).json({
      targetGroup,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}
const getAllTargetGroups = async (req, res) => {
  try {
    const targetGroups = await TargetGroup.findAll();
    return res.status(200).json({ targetGroups });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
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
}
const updateTargetGroup = async (req, res) => {
  try {
    const { targetGroupId } = req.params;
    const updated = await TargetGroup.update(req.body, {
      where: { id: targetGroupId }
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
      where: { id: targetGroupId }
    });
    if (deleted) {
      return res.status(204).send("TargetGroup deleted");
    }
    throw new Error("TargetGroup not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// Statuses

const createStatus = async (req, res) => {
  try {
    const status = await Status.create(req.body);
    return res.status(201).json({
      status,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}
const getAllStatuses = async (req, res) => {
  try {
    const statuses = await Status.findAll();
    return res.status(200).json({ statuses });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}
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
}
const updateStatus = async (req, res) => {
  try {
    const { statusId } = req.params;
    const updated = await Status.update(req.body, {
      where: { id: statusId }
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
      where: { id: statusId }
    });
    if (deleted) {
      return res.status(204).send("Status deleted");
    }
    throw new Error("Status not found");
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
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  createRegion,
  getAllRegions,
  getRegionById,
  updateRegion,
  deleteRegion,
  createTarget,
  getAllTargets,
  getTargetById,
  updateTarget,
  deleteTarget,
  createTargetGroup,
  getAllTargetGroups,
  getTargetGroupById,
  updateTargetGroup,
  deleteTargetGroup,
  createStatus,
  getAllStatuses,
  getStatusById,
  updateStatus,
  deleteStatus,
  createComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteComment
}
