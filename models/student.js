'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Student.hasMany(models.StudenTeacher)
        Student.belongsToMany(models.Teacher,{through:'StudenTeacher'})
      },
      getAllData:function(dataStudent){
        Student.findAll().then(function(data){
          dataStudent(data)
        })
      }
    },
    instanceMethods:{
      getFullName:function(){
        return (this.firstName + " " + this.lastName)
      },
      getAge:function() {
        let today = new Date()
        let age   = today.getFullYear() - this.birthDate.getFullYear();
        let month = today.getMonth() - this.birthDate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < this.birthDate.getDate())) {
         age--
       }
       return age
      }
    }
  });
  return Student;
};
