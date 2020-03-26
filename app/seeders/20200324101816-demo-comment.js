'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [{
      comment: 'hz why im doing this',
      commentAuthor:'bvdsbfdfbdsb',
      userId:'1',
      ideaId:'2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      comment: 'vdfasvadfebva why im doing this',
      commentAuthor:'bvdsbfdvdadbvabfbdsb',
      userId:'2',
      ideaId:'1',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
