'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Statuses', [{
      statusTitle: 'Idea only',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      statusTitle: 'In progress',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      statusTitle: 'Realized',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Statuses', null, {});
  }
};
