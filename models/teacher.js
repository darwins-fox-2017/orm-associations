'use strict';
module.exports = function(sequelize, DataTypes) {
    var Teacher = sequelize.define('Teacher', {
        name: DataTypes.STRING,
        email: {
          type: DataTypes.STRING,
          validate: {
            isEmail: true,
            isuniq: function(value, next) {
                Teacher.find({
                    where: {
                        email: value
                    }
                }).then(function(user) {
                    if (user) {
                        next('This email is already taken by someone')
                    } else {
                        next()
                    }
                })
              }
            }
        },
        phonenumber: {
          type: DataTypes.STRING,
          validate: {
            len: [9, 13]
          }
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return Teacher;
};
