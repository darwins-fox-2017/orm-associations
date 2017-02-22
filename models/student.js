'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      validate: {
        isEmail:true
      },
      unique: {
        args: true,
        msg: 'Email address already in use!'
      }
    }
    }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Student.hasMany(models.Student_teacher,{foreignKey: 'student_id'})
        Student.belongsToMany(models.Teacher,{through:'Student_teacher',foreignKey: 'student_id'})
      }
    }
  });
  return Student;
};
