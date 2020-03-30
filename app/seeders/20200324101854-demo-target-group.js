'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TargetGroups', [{
      targetGroupTitle: 'Students',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      targetGroupTitle: 'Old people',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      targetGroupTitle: 'Alcoholics',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TargetGroups', null, {});
  }
};
