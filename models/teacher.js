'use strict';
module.exports = function(sequelize, DataTypes) {
  var Teacher = sequelize.define('Teacher', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail:true,
        isUnique: function(value, next) {
          Teacher.find({
            where: {email:value},
            attributes: ['id']
          }).then(function(data, error) {
            if (error) {
              return next(error)
            }
            if (data) {
              return next('Email is already used')
            }
            next()
          })
        }
      }
    },
    phone: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Teacher.belongsToMany(models.Student, {through:'TeacherStudent'})
      }
    }
  });
  return Teacher;
};
[{},{},{}]

teacherstudent
1|1|4
2|1|5
3|1|6

Teacher.findById(1).then(function(teacher) {
  teacher.getStudents().then(function(students) {
    looping
  })
  // Student.findAll({
  //   where: {class:2}
  // }).then(function(students) {
  //   teacher.setStudents(students)
  // })
})