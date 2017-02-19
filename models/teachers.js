'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teachers = sequelize.define('Teachers', {
    name: DataTypes.STRING,
    email:
    {
      type: DataTypes.STRING,
      validate: {
        isEmail: {args: true, msg: "Please insert correct email!"},
        isUnique: function(value, next) {
          Teachers.find({where: {email:value}, attributes:['id']}).done(function(err,data){
            if(err) {
              return next(err)
            }
            if(data){
              return next({msg: "Email already in use"})
            }
          next()
          })
        }
      }
    },
    phone:
    {
      type: DataTypes.STRING,
      validate: {
        len: {args: [10,13], msg: "Phone number only allow values with length 10 until 13"},
        isAlphanumeric: {args: true, msg: "Phone number not allow with alphanumeric"},
        isNumeric: {args: true, msg: "Phone number not allow with letters"}
        }
    }
  }, {
    classMethods: {
      associate: function(models) {
        Teachers.hasMany(models.StudentTeacher)
        Teachers.belongsToMany(models.Students,{through:'StudentTeacher'})
      }
    }
  });
  return Teachers;
};
