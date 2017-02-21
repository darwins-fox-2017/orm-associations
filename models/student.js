'use strict';
module.exports = function(sequelize, DataTypes) {
  var student = sequelize.define('student', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    email:{
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
            isuniq: function(value, next) {
                student.find({
                    where: {
                        email: value
                    }
                }).then(function(user) {
                    if (user) {
                        next('already taken')
                    } else {
                        next()
                    }
                })
            }
        }
    },
    height: {
        type: DataTypes.INTEGER,
        validate: {
            min: 150
        }
    },
    phonenumber:{
      type:DataTypes.STRING,
      validate : {
        isNumeric:true,
        len:[10,13]
      }
    }
  }
  , {
    classMethods: {
      associate: function(models) {
        student.belongsToMany(models.teacher, {through:'studentTeacher'} );
        //student.hasMany(models.teacher, { foreignKey:'studentId'} );
      },

    studentHasTeacher: function(){


    }

    },
    instanceMethods: {
        getFullName: function() {

            return `${this.firstname} ${this.lastname} `
        },

        getAge: function() {
            let now = new Date();
            return (now.getFullYear() - this.birthdate.getFullYear());
        }

    }
  });
  return student;
};
