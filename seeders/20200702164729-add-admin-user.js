'use strict';
const bcrypt = require('bcrypt');


module.exports = {
  up: (queryInterface, Sequelize) => {
    const testUsers = [];

    testUsers.push({
      name: 'admin',
      email: 'admin@admin.com',
      encryptedPassword: bcrypt.hashSync('password', 10),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return queryInterface.bulkInsert('Users', testUsers, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
