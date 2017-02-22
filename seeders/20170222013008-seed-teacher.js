'use strict';

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
    let faker = require('faker')
    let newArr = []
    for (let i = 0; i < 10; i++ ) {
      newArr.push({ name: faker.name.findName(), email: faker.internet.email(), phone: faker.phone.phoneNumber(), createdAt: new Date(), updatedAt : new Date()})
    }
      return queryInterface.bulkInsert('Teachers', newArr)
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
