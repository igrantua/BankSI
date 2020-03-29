'use strict';
module.exports = (sequelize, DataTypes) => {
  const Idea = sequelize.define('Idea', {
    // author: DataTypes.STRING,
    title: DataTypes.STRING,
    body: DataTypes.ARRAY(DataTypes.TEXT),
    image: DataTypes.BLOB,
    file: DataTypes.BLOB,
    likeCount: DataTypes.INTEGER,
    dislikeCount: DataTypes.INTEGER,
    // likeUserId: DataTypes.ARRAY,
    // commentCount: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    // category: DataTypes.STRING,
    // region: DataTypes.STRING,
    // target: DataTypes.STRING,
    // target_group: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Idea.associate = function(models) {
    // associations can be defined here
    Idea.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id', as: 'author'}); // idea foreign, user target
    Idea.hasMany(models.Comment, { foreignKey: 'ideaId', targetKey: 'id', as:"comments"});
    Idea.hasMany(models.Status, { foreignKey: 'id', targetKey: 'statusId', as: "status"});
    Idea.belongsToMany(models.Category, { through:'IdeaCategories', foreignKey: 'ideaId', as: "category"});
    Idea.belongsToMany(models.Region, { through:'IdeaRegions', foreignKey: 'regionId', as: "region"});
    Idea.belongsToMany(models.Target, { through:'IdeaTargets', foreignKey: 'targetId', as: "target"});
    Idea.belongsToMany(models.TargetGroup, { through:'IdeaTargetGroups', foreignKey: 'targetGroupId', as: "targetGroup"});

  };
  return Idea;
};
