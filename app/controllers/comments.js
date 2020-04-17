const { Comment } = require('../models');

const createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    return res.status(201).json({
      comment,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    return res.status(200).json({ comments });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
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
};
const updateComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const updated = await Comment.update(req.body, {
      where: { id: commentId },
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
      where: { id: commentId },
    });
    if (deleted) {
      return res.status(204).send('Comment deleted');
    }
    throw new Error('Comment not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteComment,
};
