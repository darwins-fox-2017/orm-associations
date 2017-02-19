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
    return queryInterface.bulkInsert('Students', [{
      first_name: 'endy',
      last_name: 'santoso',
      gender: 'men',
      birthday: new Date('1992-04-01'),
      email: 'endy@gmail.com',
      height: 175,
      phone: 081808472592,
      teacherId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'irwin',
      last_name: 'pratajaya',
      gender: 'men',
      birthday: new Date('1995-03-12'),
      email: 'irwin@gmail.com',
      height: 178,
      phone: 08191921898,
      teacherId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'wahyu',
      last_name: 'hidayat',
      gender: 'men',
      birthday: new Date('1990-02-020'),
      email: 'wahyu@gmail.com',
      height: 170,
      phone: 18171827373,
      teacherId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      first_name: 'windi',
      last_name: 'windian',
      gender: 'women',
      birthday: new Date('1986-02-14'),
      email: 'windy@gmail.com',
      height: 165,
      phone: 19283921232,
      teacherId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
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
