'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentTeacher = sequelize.define('StudentTeacher', {
    studentId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        StudentTeacher.belongsTo(models.Students)
        StudentTeacher.belongsTo(models.Teachers)
      }
    }
  });
  return StudentTeacher;
};
