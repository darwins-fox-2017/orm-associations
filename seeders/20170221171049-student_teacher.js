'use strict';
const faker = require('faker');

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
    return queryInterface.bulkInsert('Student_teachers', [
      {
        student_id:Math.floor(Math.random()*18+1),
        teacher_id:Math.floor(Math.random()*18+1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        student_id:Math.floor(Math.random()*18+1),
        teacher_id:Math.floor(Math.random()*18+1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        student_id:Math.floor(Math.random()*18+1),
        teacher_id:Math.floor(Math.random()*18+1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        student_id:Math.floor(Math.random()*18+1),
        teacher_id:Math.floor(Math.random()*18+1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        student_id:Math.floor(Math.random()*18+1),
        teacher_id:Math.floor(Math.random()*18+1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        student_id:Math.floor(Math.random()*18+1),
        teacher_id:Math.floor(Math.random()*18+1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        student_id:Math.floor(Math.random()*18+1),
        teacher_id:Math.floor(Math.random()*18+1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        student_id:Math.floor(Math.random()*18+1),
        teacher_id:Math.floor(Math.random()*18+1),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        student_id:Math.floor(Math.random()*18+1),
        teacher_id:Math.floor(Math.random()*18+1),
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ]);
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    // return queryInterface.bulkDelete('Students', null, {});
  }
};
