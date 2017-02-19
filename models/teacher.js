'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
            type: DataTypes.STRING,
            validate: {
                        isEmail: true
            }
          },
    phone: {
          type: DataTypes.STRING,
          validate: {
            len: [10 - 13],
            isNumeric: false,
            isAlphanumeric: false
          }
        },
    studentId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.hasMany(models.Student);
      }
    }
  });
  return Teacher;
};
