'use strict';

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      comment: DataTypes.ARRAY(DataTypes.TEXT),
      // commentAuthor: DataTypes.STRING,
      likeCount: DataTypes.INTEGER,
      dislikeCount: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      ideaId: DataTypes.INTEGER,
    },
    {},
  );
  // eslint-disable-next-line func-names
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id' });
    Comment.belongsTo(models.Idea, { foreignKey: 'ideaId', targetKey: 'id' });
  };
  return Comment;
};
