'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ideas', [{
      author: 'John Doe',
      title: 'Crazy idea',
      body: 'Learn Node js',
      // image: DataTypes.BLOB,
      // file: DataTypes.BLOB,
      likeCount: '0',
      // likeUserId: DataTypes.ARRAY,
      commentCount: '0',
      userId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      author: 'John Doe',
      title: 'Dull idea',
      body: 'Learn Node js better',
      // image: DataTypes.BLOB,
      // file: DataTypes.BLOB,
      likeCount: '0',
      // likeUserId: DataTypes.ARRAY,
      commentCount: '0',
      // status: DataTypes.STRING,
      // category: DataTypes.STRING,
      // region: DataTypes.STRING,
      // target: DataTypes.STRING,
      // target_group: DataTypes.STRING,
      userId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Ideas', null, {});
  }
};