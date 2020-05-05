'use strict';

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [
      {
        roleName: 'User',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleName: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roleName: 'Moderator',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  },
};
