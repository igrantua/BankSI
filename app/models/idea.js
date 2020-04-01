'use strict';
module.exports = (sequelize, DataTypes) => {
  const Idea = sequelize.define('Idea', {
    title: DataTypes.STRING,
    body: DataTypes.ARRAY(DataTypes.TEXT),
    image: DataTypes.BLOB,
    file: DataTypes.BLOB,
    likeCount: DataTypes.INTEGER,
    dislikeCount: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Idea.associate = function(models) {
    // associations can be defined here

    Idea.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id', as: 'author'}); // idea foreign, user target
    Idea.hasMany(models.Comment, { foreignKey: 'ideaId', targetKey: 'id', as:"comments"});
    Idea.hasMany(models.Status, { foreignKey: 'id', targetKey: 'statusId', as: "status"});
    Idea.belongsToMany(models.Target, { through:'IdeaTargets', foreignKey: 'ideaId', as: "target"});
    Idea.belongsToMany(models.Region, { through:'IdeaRegions', foreignKey: 'ideaId', as: "region"});
    Idea.belongsToMany(models.TargetGroup, { through:'IdeaTargetGroups', foreignKey: 'ideaId', as: "targetGroup"});
    Idea.belongsToMany(models.Category, { through:'IdeaCategories', foreignKey: 'ideaId', as: "category"});
  };
  return Idea;
};
