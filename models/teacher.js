'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
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
        Teacher.hasMany(models.Student_teacher,{foreignKey: 'teacher_id'})
        Teacher.belongsToMany(models.Student,{through:'Student_teacher', foreignKey: 'teacher_id'})
      }
    }
  });
  return Teacher;
};
