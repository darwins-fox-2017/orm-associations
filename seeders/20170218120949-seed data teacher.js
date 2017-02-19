'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
*/
      return queryInterface.bulkInsert('teachers', [{
        name: 'umar bakri',
        email:'umar@ganteng.com',
        phonenumber:'0812366849483',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: 'sumarsono',
        email:'sumar@sono.com',
        phonenumber:'081236684941',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: 'harto mulio',
        email:'harto@kece.com',
        phonenumber:'081236684942',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: 'manto keren',
        email:'manto@keren.com',
        phonenumber:'081236684943',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: 'karno keren',
        email:'karno@keren.com',
        phonenumber:'081236684944',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: 'karyono',
        email:'karyo@no.com',
        phonenumber:'081236684944',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: 'saparudin',
        email:'sapar@udin.com',
        phonenumber:'081236684944',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: 'musdalifa',
        email:'musda@lifa.com',
        phonenumber:'081236684944',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        name: 'indah soesanti',
        email:'indah@soesanti.com',
        phonenumber:'081236684944',
        createdAt:new Date(),
        updatedAt:new Date()
      }], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */return queryInterface.bulkDelete('teachers', null, {});
  }
};
