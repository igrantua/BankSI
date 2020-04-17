'use strict';

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        categoryTitle: 'Health Care',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryTitle: 'Social Entrepreneurship',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryTitle: 'Smth stupid',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
