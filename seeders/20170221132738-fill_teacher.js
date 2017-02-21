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
    // return queryInterface.bulkInsert('Teachers', [
    //   {name: 'Suwarno', email: 'suwarno@gmail.com', phone: '0812564776352', createdAt: new Date, updatedAt: new Date},
    //   {name: 'Gantari', email: 'gantari@gmail.com', phone: '3524566657463', createdAt: new Date, updatedAt: new Date},
    //   {name: 'Sadiman', email: 'sadiman@gmail.com', phone: '5467862354655', createdAt: new Date, updatedAt: new Date}
    // ], {})
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
