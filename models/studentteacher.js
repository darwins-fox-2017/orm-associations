'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudentTeacher = sequelize.define('StudentTeacher', {
    teacher_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return StudentTeacher;
};
