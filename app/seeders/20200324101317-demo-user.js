'use strict';

module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        userName: 'John Doe',
        email: 'example@example.com',
        mobile: '0982147832',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Jane Doe',
        email: 'example@example2.com',
        mobile: '0982142532',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userName: 'Jane Hawkeye',
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
