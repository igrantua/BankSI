'use strict';
module.exports = (sequelize, DataTypes) => {
  const Target = sequelize.define('Target', {
    targetTitle: DataTypes.STRING
  }, {});
  Target.associate = function(models) {
    // associations can be defined here
    Target.belongsToMany(models.Idea, { through: 'IdeaTargets', foreignKey: 'targetId'})
  };
  return Target;
};
