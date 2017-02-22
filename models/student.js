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
        // Student.hasMany(models.StudentTeacher)
        Student.belongsToMany(models.Teacher,{through:'StudentTeacher', foreignKey: 'student_id'})
      }
    }
  });
  return Student;
};
