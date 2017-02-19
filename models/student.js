'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    height: {
          type: DataTypes.INTEGER,
          validate: { min: 150 }
            },
    phone: {
          type: DataTypes.STRING,
          validate: {
            len: [10 - 13],
            isNumeric: false,
            isAlphanumeric: false
          }
        },
    teacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Student.belongsTo(models.Teacher);
      }
    }
  });
  return Student;
};
