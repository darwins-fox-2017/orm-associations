'use strict';
module.exports = function(sequelize, DataTypes) {
  var studentTeacher = sequelize.define('studentTeacher', {
    studentId: DataTypes.INTEGER,
    teacherId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        studentTeacher.belongsTo(models.student, { foreignKey:'studentId'} );
        studentTeacher.belongsTo(models.teacher, { foreignKey:'teacherId'} );
      }
    }
  });
  return studentTeacher;
};
