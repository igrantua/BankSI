'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ideas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      body: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      image: {
        type: Sequelize.BLOB,
      },
      file: {
        type: Sequelize.BLOB,
      },
      likeCount: {
        type: Sequelize.INTEGER,
      },
      dislikeCount: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        // allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
          as: 'author',
        },
      },
      statusId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        // allowNull: false,
        references: {
          model: 'Statuses',
          key: 'id',
          // as: 'status'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ideas');
  },
};
