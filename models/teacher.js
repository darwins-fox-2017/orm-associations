'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      validate: {
        isEmail:true
      },
      unique: {
        args: true,
        msg: 'Email address already in use!'
      }
    },
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teachers.hasMany(models.StudentTeachers)
        Teachers.belongsToMany(models.Students,{through:'StudentTeachers'})
      }
    }
  });
  return Teacher;
};
