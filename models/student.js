'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birth_date: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Student.hasMany(models.StudentTeacher)
        Student.belongsToMany(models.Teacher, {through: 'StudentTeacher'})
      }
    }, instanceMethods:{
      getAge:function() {
        let today = new Date()
        let age   = today.getFullYear() - this.birth_date.getFullYear();
        let month = today.getMonth() - this.birth_date.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < this.birth_date.getDate())) {
         age--
       }
       return age
      }
    }
  });
  return Student;
};
