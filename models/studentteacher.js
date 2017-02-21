'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentTeacher = sequelize.define('StudentTeacher', {
    teacher_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        StudentTeachers.belongsTo(models.Students)
        StudentTeachers.belongsTo(models.Teachers)
      }
    }
  });
  return StudentTeacher;
};
