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
    return queryInterface.bulkInsert('Students', [
      {first_name: 'endy', last_name: 'santoso', birth_date: new Date('1992-04-01'), createdAt: new Date(), updatedAt: new Date()},
      {first_name: 'char', last_name: 'aznable', birth_date: new Date('1991-12-21'), createdAt: new Date(), updatedAt: new Date()},
      {first_name: 'banagher', last_name: 'links', birth_date: new Date('1993-11-02'), createdAt: new Date(), updatedAt: new Date()},
      {first_name: 'amuro', last_name: 'ray', birth_date: new Date('1982-07-03'), createdAt: new Date(), updatedAt: new Date()},
      {first_name: 'bright', last_name: 'noah', birth_date: new Date('1997-03-11'), createdAt: new Date(), updatedAt: new Date()},
      {first_name: 'riddhe', last_name: 'marcenas', birth_date: new Date('1999-10-09'), createdAt: new Date(), updatedAt: new Date()},
      {first_name: 'mikazuki', last_name: 'augus', birth_date: new Date('1982-02-02'), createdAt: new Date(), updatedAt: new Date()}
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
