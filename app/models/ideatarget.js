'use strict';
module.exports = (sequelize, DataTypes) => {
  const IdeaTarget = sequelize.define('IdeaTarget', {
    targetId: DataTypes.INTEGER,
    ideaId: DataTypes.INTEGER
  }, {});
  IdeaTarget.associate = function(models) {
    // associations can be defined here
    IdeaTarget.belongsTo(models.Idea, { foreignKey: 'ideaId'});
    IdeaTarget.belongsTo(models.Target, { foreignKey: 'targetId'});
  };
  return IdeaTarget;
};