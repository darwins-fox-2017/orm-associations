'use strict';
const faker = require('faker');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Students', [
      {
        email:faker.internet.email(),
        name:faker.name.findName(),
        phone:faker.phone.phoneNumberFormat(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email:faker.internet.email(),
        name:faker.name.findName(),
        phone:faker.phone.phoneNumberFormat(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email:faker.internet.email(),
        name:faker.name.findName(),
        phone:faker.phone.phoneNumberFormat(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email:faker.internet.email(),
        name:faker.name.findName(),
        phone:faker.phone.phoneNumberFormat(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email:faker.internet.email(),
        name:faker.name.findName(),
        phone:faker.phone.phoneNumberFormat(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email:faker.internet.email(),
        name:faker.name.findName(),
        phone:faker.phone.phoneNumberFormat(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email:faker.internet.email(),
        name:faker.name.findName(),
        phone:faker.phone.phoneNumberFormat(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email:faker.internet.email(),
        name:faker.name.findName(),
        phone:faker.phone.phoneNumberFormat(),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email:faker.internet.email(),
        name:faker.name.findName(),
        phone:faker.phone.phoneNumberFormat(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ]);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Students', null, {});
  }
};
