'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: DataTypes.STRING,
    commentAuthor: DataTypes.STRING,
    commentLikeCount: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    ideaId: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id'});
    Comment.belongsTo(models.Idea, { foreignKey: 'ideaId', targetKey: 'id'});
  };
  return Comment;
};