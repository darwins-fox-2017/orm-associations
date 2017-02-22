'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
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
        Teacher.hasMany(models.StudentTeacher, {foreignKey: 'student_id'})
        Teacher.belongsToMany(models.Student,{through:'StudentTeacher', foreignKey: 'teacher_id'})
      }
    }
  });
  return Teacher;
};
