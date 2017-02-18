'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    Name: DataTypes.STRING,
    Email:{
      type:DataTypes.STRING,
      validate:{
        isEmail:true,
        isUnique:function(value, next){
          Teacher.find({
            where:{Email:value},
            attributes:["id"]
          }).done(function(user){
            if (user) {
              return next("Email address already in use")
            }
            next()
          })
        }
      }
    },
    Phone:{
      type:DataTypes.STRING,
      validate:{
        len:{
          args:[10,13],
          msg:"Phone length must be 10-13"
        },
        isNumeric:{
          args:true,
          msg:"Phone not allow letters"
        },
        isAlphanumeric:{
          args:false,
          msg:"Phone not allow alphanumeric"
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Teacher.hasMany(models.StudenTeacher)
        Teacher.belongsToMany(models.Student,{through:'StudenTeacher'})
      }
    }
  });
  return Teacher;
};
