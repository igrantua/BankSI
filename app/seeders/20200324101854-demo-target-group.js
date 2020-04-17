'use strict';

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TargetGroups', [
      {
        targetGroupTitle: 'Students',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        targetGroupTitle: 'Old people',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        targetGroupTitle: 'Alcoholics',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TargetGroups', null, {});
  },
};
