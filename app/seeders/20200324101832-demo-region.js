'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Regions', [{
      regionTitle: 'Zolotonosha',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      regionTitle: 'Cherkasy',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Regions', null, {});
  }
};
