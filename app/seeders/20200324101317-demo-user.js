'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'example@example.com',
      mobile: '0982147832',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'example@example2.com',
      mobile: '0982142532',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};