"use strict"
let db = require('./models');

class StudentTeacher {
  static validateEmailTeachers() {
    db.Teacher.create({
      name:'jegan', email:'jegan@gmail.com', phone:'081808472592'
    }).then(function(resultThenTeacher) {
      console.log('ADD data completed');
    }).catch(function(resultCatchTeacher) {
      console.log(err.message);
    })
  }

  static addDataIntoStudentTeacher() {
    db.Teacher.findById(1)
    .then(function(dataTeacher) {
      db.Student.findById(1)
      .then(function(dataStudent) {
        dataStudent.setTeachers(dataTeacher)
      })
    })

    db.Teacher.findById(2)
    .then(function(dataTeacher) {
      db.Student.findById(2)
      .then(function(dataStudent) {
        dataStudent.addTeachers(dataTeacher)
      })
    })
  }

  static findStudent(id) {
    db.Teacher.findById(id)
    .then(function(get) {
      get.getStudents()
      .then(function(result) {
        result.forEach(function(data) {
          console.log(`---------- ***** LIST ***** ----------`);
          console.log(`Student id : ${data.id} \nName: ${data.first_name} ${data.last_name} \nAge: ${data.getAge()} `);
        })
      })
      .catch(function(err) {
        console.log(err.message);
      })
    })
  }

  static findTeacher(id) {
    db.Student.findById(id)
    .then(function(get) {
      get.getTeachers()
      .then(function(result) {
        result.forEach(function(data) {
          console.log(`---------- ***** LIST ***** ----------`);
          console.log(`Teacher Id: ${data.id} \nName : ${data.name} \nEmail: ${data.email} \nPhone: ${data.phone} `);
        })
      })
      .catch(function(err) {
        console.log(err.message);
      })
    })
  }
}

// StudentTeacher.validateEmailTeachers()
// StudentTeacher.addDataIntoStudentTeacher()
 StudentTeacher.findStudent(2)
// StudentTeacher.findTeacher(2)
