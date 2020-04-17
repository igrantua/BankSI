'use strict';

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Statuses', [
      {
        statusTitle: 'Idea only',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        statusTitle: 'In progress',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        statusTitle: 'Realized',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Statuses', null, {});
  },
};
