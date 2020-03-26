'use strict';
module.exports = (sequelize, DataTypes) => {
  const IdeaStatus = sequelize.define('IdeaStatus', {
    statusId: DataTypes.INTEGER,
    ideaId: DataTypes.INTEGER
  }, {});
  IdeaStatus.associate = function(models) {
    // associations can be defined here
    IdeaStatus.belongsTo(models.Idea, { foreignKey: 'ideaId'});
    IdeaStatus.belongsTo(models.Status, { foreignKey: 'statusId'});
  };
  return IdeaStatus;
};