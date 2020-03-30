'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Targets', [{
      targetTitle: 'Get some money',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      targetTitle: 'Get some respect',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      targetTitle: 'Get some popularity',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Targets', null, {});
  }
};
