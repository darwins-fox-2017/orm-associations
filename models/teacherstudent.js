'use strict';
module.exports = function(sequelize, DataTypes) {
  var TeacherStudent = sequelize.define('TeacherStudent', {
    studentId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return TeacherStudent;
};