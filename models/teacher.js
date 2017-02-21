'use strict';
module.exports = function(sequelize, DataTypes) {
  var teacher = sequelize.define('teacher', {
    name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true,
            isuniq: function(value, next) {
                teacher.find({
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
    phonenumber: {
      type:DataTypes.STRING,
      validate : {
        isNumeric:true,
        len:[10,13]
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
          teacher.belongsToMany(models.student, {through:'studentTeacher'} );
          //teacher.hasMany(models.student, { foreignKey:'teacherId'} );
      }
    }
  });
  return teacher;
};
