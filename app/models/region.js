'use strict';

module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define(
    'Region',
    {
      regionTitle: DataTypes.STRING,
    },
    {},
  );
  // eslint-disable-next-line func-names
  Region.associate = function(models) {
    // associations can be defined here
    Region.belongsToMany(models.Idea, { through: 'IdeaRegions', foreignKey: 'regionId' });
  };
  return Region;
};
