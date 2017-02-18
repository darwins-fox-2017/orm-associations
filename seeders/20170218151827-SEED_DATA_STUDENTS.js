'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Students", [
      {
        firstName:"Eri",
        lastName:"Irawan",
        birthDate:new Date("1991-02-01"),
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        firstName:"Firman",
        lastName:"Pebrzal",
        birthDate:new Date("1993-04-07"),
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        firstName:"Wahyu",
        lastName:"Hidayat",
        birthDate:new Date("1994-06-12"),
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Students", null,{})
  }
};
