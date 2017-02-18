'use strict';
module.exports = function(sequelize, DataTypes) {
  var StudenTeacher = sequelize.define('StudenTeacher', {
    StudentId: DataTypes.INTEGER,
    TeacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        StudenTeacher.belongsTo(models.Student)
        StudenTeacher.belongsTo(models.Teacher)
      }
    }
  });
  return StudenTeacher;
};
