'use strict';

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Regions', [
      {
        regionTitle: 'Zolotonosha',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        regionTitle: 'Cherkasy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        regionTitle: 'Southern Carolina',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Regions', null, {});
  },
};
