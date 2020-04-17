'use strict';

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        mobile: '0982147832',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'example@example2.com',
        mobile: '0982142532',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jane',
        lastName: 'Hawkeye',
        email: 'example@example3.com',
        mobile: '0952142532',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
