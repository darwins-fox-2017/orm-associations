'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student_teacher = sequelize.define('Student_teacher', {
    student_id: DataTypes.INTEGER,
    teacher_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Student_teacher.belongsTo(models.Student, {foreignKey : 'student_id'})
        Student_teacher.belongsTo(models.Teacher, {foreignKey : 'teacher_id'})
      }
    }
  });
  return Student_teacher;
};
