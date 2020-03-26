'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ideas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      author: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.BLOB
      },
      file: {
        type: Sequelize.BLOB
      },
      likeCount: {
        type: Sequelize.INTEGER
      },
      // likeUserId: {
      //   type: Sequelize.ARRAY(Sequelize.INTEGER)
      // },
      commentCount: {
        type: Sequelize.INTEGER
      },
      // status: {
      //   type: Sequelize.STRING
      // },
      // category: {
      //   type: Sequelize.STRING
      // },
      // region: {
      //   type: Sequelize.STRING
      // },
      // target: {
      //   type: Sequelize.STRING
      // },
      // target_group: {
      //   type: Sequelize.STRING
      // },
      userId: {
        type: Sequelize.INTEGER,
		    onDelete: 'CASCADE',
		    allowNull: false,
		    references: {
			    model: 'Users',
			    key: 'id',
			    // as: 'user'
		    }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ideas');
  }
};