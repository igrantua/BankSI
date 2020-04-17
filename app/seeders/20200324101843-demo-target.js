'use strict';

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Targets', [
      {
        targetTitle: 'Get some money',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        targetTitle: 'Get some respect',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        targetTitle: 'Get some popularity',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Targets', null, {});
  },
};
