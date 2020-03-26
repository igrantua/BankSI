'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TargetGroups', [{
      targetGroupTitle: 'qwertyui',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      targetGroupTitle: 'iuytrewq',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TargetGroups', null, {});
  }
};