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
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      teacher_id: Math.floor(Math.random()*30+1),
      student_id: Math.floor(Math.random()*30+1),
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
  }
};
