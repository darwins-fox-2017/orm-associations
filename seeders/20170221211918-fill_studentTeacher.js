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
    return queryInterface.bulkInsert('StudentTeachers', [
      {UserId: 11, TeacherId: 1, createdAt: new Date(), updatedAt: new Date()},
      {UserId: 11, TeacherId: 3, createdAt: new Date(), updatedAt: new Date()},
      {UserId: 15, TeacherId: 1, createdAt: new Date(), updatedAt: new Date()},
      {UserId: 15, TeacherId: 2, createdAt: new Date(), updatedAt: new Date()},
      {UserId: 15, TeacherId: 3, createdAt: new Date(), updatedAt: new Date()}
    ])
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
