'use strict';

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ideas', [
      {
        // author: 'John Doe',
        title: 'Crazy idea',
        body: ['Learn Node js', 'dfvbdfsbfbgxfgn'],
        // image: DataTypes.BLOB,
        // file: DataTypes.BLOB,
        likeCount: '0',
        dislikeCount: '0',
        userId: '1',
        statusId: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Dull idea',
        body: ['Learn Node js', 'dfvbdfsbfbgxfgn'],
        // image: DataTypes.BLOB,
        // file: DataTypes.BLOB,
        likeCount: '0',
        dislikeCount: '0',
        userId: '2',
        statusId: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ideas', null, {});
  },
};
