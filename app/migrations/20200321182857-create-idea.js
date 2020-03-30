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
      // author: {
      //   type: Sequelize.STRING
      // },
      title: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
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
      dislikeCount: {
        type: Sequelize.INTEGER
      },
      // likeUserId: {
      //   type: Sequelize.ARRAY(Sequelize.INTEGER)
      // },
      // commentCount: {
      //   type: Sequelize.INTEGER
      // },
      // statusId: {
      //   type: Sequelize.INTEGER,
      //   onDelete: 'CASCADE',
		  //   allowNull: true,
		  //   references: {
			//     model: 'Statuses',
			//     key: 'id',
			//     // as: 'status'
		  //   }
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
		    // allowNull: false,
		    references: {
			    model: 'Users',
			    key: 'id',
			    as: 'author'
		    }
      },
      statusId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
		    // allowNull: false,
		    references: {
			    model: 'Statuses',
			    key: 'id',
			    // as: 'status'
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
