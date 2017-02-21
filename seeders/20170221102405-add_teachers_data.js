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
      return queryInterface.bulkInsert('Teachers', [{
        name: 'John Dummy 1',
        email: 'johndummy1@dummy.com',
        phone: '08582834252',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'John Dummy2',
        email: 'johndummy2@dummy.com',
        phone: '08582833211',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'John Dummy3',
        email: 'johndummy3@dummy.com',
        phone: '08582833211',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'John Dummy4',
        email: 'johndummy4@dummy.com',
        phone: '08582833211',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'John Dummy5',
        email: 'johndummy5@dummy.com',
        phone: '08582833211',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'John Dummy6',
        email: 'johndummy6@dummy.com',
        phone: '08582833211',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'John Dummy7',
        email: 'johndummy7@dummy.com',
        phone: '08582833211',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'John Dummy8',
        email: 'johndummy8@dummy.com',
        phone: '08582833211',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'John Dummy9',
        email: 'johndummy9@dummy.com',
        phone: '08582833211',
        createdAt: new Date(),
        updatedAt: new Date()
      }],{});
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
