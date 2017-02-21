'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
*/

      return queryInterface.bulkInsert('students', [{
        firstname:'mahamud',
        lastname:'abas',
        birthdate:'1992-10-11',
        email:'mahmud@abas.com',
        height:151,
        phonenumber:'081218318121',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        firstname:'ahmad',
        lastname:'bihaki',
        birthdate:'1992-10-12',
        email:'mahmu@abas.com',
        height:151,
        phonenumber:'081218318121',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        firstname:'saparudin',
        lastname:'asoy',
        birthdate:'1992-10-13',
        email:'sapar@udin.com',
        height:151,
        phonenumber:'081218318123',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        firstname:'sukarmin',
        lastname:'maimun',
        birthdate:'1992-10-12',
        email:'sukar@min.com',
        height:151,
        phonenumber:'081218318121',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        firstname:'ahmad',
        lastname:'kamil',
        birthdate:'1992-10-13',
        email:'kamil@ahmad.com',
        height:151,
        phonenumber:'081218318121',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        firstname:'suparman',
        lastname:'super',
        birthdate:'1992-10-11',
        email:'supar@man.com',
        height:151,
        phonenumber:'081218318121',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        firstname:'bat',
        lastname:'man',
        birthdate:'1992-10-11',
        email:'bat@man.com',
        height:151,
        phonenumber:'081218318121',
        createdAt:new Date(),
        updatedAt:new Date()
      },{
        firstname:'iron',
        lastname:'man',
        birthdate:'1992-10-11',
        email:'iron@man.com',
        height:151,
        phonenumber:'081218318121',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        firstname:'wonder',
        lastname:'woman',
        birthdate:'1992-10-11',
        email:'wonder@woman.com',
        height:151,
        phonenumber:'081218318121',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        firstname:'bambang',
        lastname:'rahmadi',
        birthdate:'1992-10-11',
        email:'bambang@man.com',
        height:151,
        phonenumber:'081218318121',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        firstname:'ramadi',
        lastname:'bam',
        birthdate:'1992-10-11',
        email:'ramadi@man.com',
        height:151,
        phonenumber:'081218318121',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        firstname:'diki',
        lastname:'arga',
        birthdate:'1992-10-11',
        email:'diki@man.com',
        height:151,
        phonenumber:'081218318121',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        firstname:'suparjo',
        lastname:'super',
        birthdate:'1992-10-11',
        email:'suparjo@man.com',
        height:151,
        phonenumber:'081218318121',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        firstname:'hatono',
        lastname:'mall',
        birthdate:'1992-10-11',
        email:'hartono@man.com',
        height:151,
        phonenumber:'081218318121',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        firstname:'aston',
        lastname:'katanyo',
        birthdate:'1992-10-11',
        email:'aston@man.com',
        height:151,
        phonenumber:'081218318121',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        firstname:'aston',
        lastname:'katanyo',
        birthdate:'1992-10-11',
        email:'aston@man.com',
        height:151,
        phonenumber:'081218318121',
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        firstname:'julia',
        lastname:'peres',
        birthdate:'1992-10-11',
        email:'julia@man.com',
        height:151,
        phonenumber:'081218318121',
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
    */return queryInterface.bulkDelete('students', null, {});
  }
};
