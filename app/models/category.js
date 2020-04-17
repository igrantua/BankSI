'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      categoryTitle: DataTypes.STRING,
    },
    {},
  );
  // eslint-disable-next-line func-names
  Category.associate = function(models) {
    // associations can be defined here
    Category.belongsToMany(models.Idea, { through: 'IdeaCategories', foreignKey: 'categoryId' });
  };
  return Category;
};
