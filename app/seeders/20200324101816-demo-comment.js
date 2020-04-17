'use strict';

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        comment: ['hz why im doing this'],
        // commentAuthor:'bvdsbfdfbdsb',
        userId: '1',
        ideaId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        comment: ['vdfasvadfebva why im doing this'],
        // commentAuthor:'bvdsbfdvdadbvabfbdsb',
        userId: '2',
        ideaId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  },
};
