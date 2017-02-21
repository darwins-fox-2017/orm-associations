'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Student.belongsToMany(models.Teacher, {through:'TeacherStudent'})
      }
    }
  });
  return Student;
};