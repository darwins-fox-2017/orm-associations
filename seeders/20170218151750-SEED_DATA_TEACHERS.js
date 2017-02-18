'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Teachers", [
      {Name:"Eri",Email:"eri@email.com",Phone:"123456789012",createdAt:new Date(),updatedAt:new Date()},
      {Name:"Firman",Email:"firman@email.com",Phone:"123456789012",createdAt:new Date(),updatedAt:new Date()},
      {Name:"Wahyu",Email:"wahyu@email.com",Phone:"123456789012",createdAt:new Date(),updatedAt:new Date()},
      {Name:"Dave",Email:"dave@email.com",Phone:"123456789012",createdAt:new Date(),updatedAt:new Date()},
      {Name:"mitch",Email:"mitch@email.com",Phone:"123456789012",createdAt:new Date(),updatedAt:new Date()},
      {Name:"douglas",Email:"douglas@email.com",Phone:"123456789012",createdAt:new Date(),updatedAt:new Date()},
      {Name:"watson",Email:"watson@email.com",Phone:"123456789012",createdAt:new Date(),updatedAt:new Date()},
      {Name:"rafa",Email:"rafa@email.com",Phone:"123456789012",createdAt:new Date(),updatedAt:new Date()},
      {Name:"samuel",Email:"sam@email.com",Phone:"123456789012",createdAt:new Date(),updatedAt:new Date()}
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Teachers", null,{})
  }
};
