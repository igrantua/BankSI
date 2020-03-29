'use strict';
module.exports = (sequelize, DataTypes) => {
  const Idea = sequelize.define('Idea', {
    // author: DataTypes.STRING,
    title: DataTypes.STRING,
    body: DataTypes.STRING,
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
    Idea.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'id'}); // idea foreign, user target
    Idea.hasMany(models.Comment, { foreignKey: 'ideaId', targetKey: 'id'});
    Idea.hasMany(models.Status, { foreignKey: 'ideaId', targetKey: 'id'});
    Idea.belongsToMany(models.Category, { through:'IdeaCategories', foreignKey: 'ideaId'});
    Idea.belongsToMany(models.Region, { through:'IdeaRegions', foreignKey: 'regionId'});
    Idea.belongsToMany(models.Target, { through:'IdeaTargets', foreignKey: 'targetId'});
    Idea.belongsToMany(models.TargetGroup, { through:'IdeaTargetGroups', foreignKey: 'targetGroupId'});

  };
  return Idea;
};
