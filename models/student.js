'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      validate: {
        isEmail:true
      },
      unique: {
        args: true,
        msg: 'Email address already in use!'
      }
    },
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Students.hasMany(models.StudentTeachers)
        Students.belongsToMany(models.Teachers,{through:'StudentTeachers'})
      }
    }
  });
  return Student;
};
