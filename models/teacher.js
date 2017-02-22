'use strict';
module.exports = function(sequelize, DataTypes) {
    var Teachers = sequelize.define('Teachers', {
        name: DataTypes.STRING,
        email: {
          type: DataTypes.STRING,
          validate: {
            isEmail: true,
            isuniq: function(value, next) {
                Teachers.find({
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
        phone: {
          type: DataTypes.STRING,
          validate: {
            len: [9, 13]
          }
        }
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
                Teachers.belongsToMany(models.Students, {through: 'StudentTeacher'})
            }
        }
    });
    return Teachers;
};
