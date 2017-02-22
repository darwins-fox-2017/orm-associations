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
      newArr.push({ firstname: faker.name.firstName(), lastname: faker.name.lastName(), createdAt: new Date(), updatedAt : new Date()})
    }
      return queryInterface.bulkInsert('Students', newArr)
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
