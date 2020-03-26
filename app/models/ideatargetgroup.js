'use strict';
module.exports = (sequelize, DataTypes) => {
  const IdeaTargetGroup = sequelize.define('IdeaTargetGroup', {
    targetGroupId: DataTypes.INTEGER,
    ideaId: DataTypes.INTEGER
  }, {});
  IdeaTargetGroup.associate = function(models) {
    // associations can be defined here
    IdeaTargetGroup.belongsTo(models.Idea, { foreignKey: 'ideaId'});
    IdeaTargetGroup.belongsTo(models.TargetGroups, { foreignKey: 'targetGroupId'});
  };
  return IdeaTargetGroup;
};