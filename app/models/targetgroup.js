'use strict';
module.exports = (sequelize, DataTypes) => {
  const TargetGroup = sequelize.define('TargetGroup', {
    targetGroupTitle: DataTypes.STRING
  }, {});
  TargetGroup.associate = function(models) {
    // associations can be defined here
    TargetGroup.belongsToMany(models.Idea, { through: 'IdeaTargetGroups', foreignKey: 'targetGroupId'})
  };
  return TargetGroup;
};
