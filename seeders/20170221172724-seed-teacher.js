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
    return queryInterface.bulkInsert('Teachers', [
      {name: 'unicorn', email: 'unicorn@gmail.com', phone: 0814082132, createdAt: new Date(), updatedAt: new Date()},
      {name: 'banshee', email: 'banshee@gmail.com', phone: 0813489234, createdAt: new Date(), updatedAt: new Date()},
      {name: 'shinanju', email: 'shinanju@gmail.com', phone: 08134324092, createdAt: new Date(), updatedAt: new Date()},
      {name: 'deltaPlus', email: 'deltaPlus@gmail.com', phone: 0812312093, createdAt: new Date(), updatedAt: new Date()}
    ], {});
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
