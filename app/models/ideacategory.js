'use strict';

module.exports = (sequelize, DataTypes) => {
  const IdeaCategory = sequelize.define(
    'IdeaCategory',
    {
      categoryId: DataTypes.INTEGER,
      ideaId: DataTypes.INTEGER,
    },
    {},
  );
  // eslint-disable-next-line func-names
  IdeaCategory.associate = function(models) {
    // associations can be defined here
    IdeaCategory.belongsTo(models.Idea, { foreignKey: 'ideaId' });
    IdeaCategory.belongsTo(models.Category, { foreignKey: 'categoryId' });
  };
  return IdeaCategory;
};
