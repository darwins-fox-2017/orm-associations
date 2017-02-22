'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Student.belongsToMany(models.Teacher,{through:'StudentTeacher'})
      },
      getAllData:function(dataStudent){
        Student.findAll().then(function(data){
          dataStudent(data)
        })
      }
    },
    instanceMethods:{
      getFullName:function(){
        return (this.firstname + " " + this.lastname)
      },
      getAge:function() {
        let today = new Date()
        let age   = today.getFullYear() - this.birthdate.getFullYear();
        let month = today.getMonth() - this.birthdate.getMonth();

        if (month < 0 || (month === 0 && today.getDate() < this.birthDate.getDate())) {
         age--
       }
       return age
      }
    }
  });
  return Student;
};
