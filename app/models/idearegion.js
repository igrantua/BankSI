'use strict';
module.exports = (sequelize, DataTypes) => {
  const IdeaRegion = sequelize.define('IdeaRegion', {
    regionId: DataTypes.INTEGER,
    ideaId: DataTypes.INTEGER
  }, {});
  IdeaRegion.associate = function(models) {
    // associations can be defined here
    IdeaRegion.belongsTo(models.Idea, { foreignKey: 'ideaId'});
    IdeaRegion.belongsTo(models.Region, { foreignKey: 'regionId'});
  };
  return IdeaRegion;
};