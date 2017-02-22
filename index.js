
"use strict"

var models = require('./models')
const faker = require('faker');



class StudentTeacherAssociation {

  findTeachers(studentID){
    models.Student.findById(studentID).then(function(student){
      student.getTeachers().then(function(teacherData){
        console.log(`\nTeachers of ${student.name}:`);
        teacherData.forEach(function(teacher){
          console.log(`======================================\nTeacher id: ${teacher.id}\nName: ${teacher.name}\nEmail : ${teacher.email}\nPhone : ${teacher.phone}`);
        })
      })
    }).catch(function(err){
      console.log(err)
    })
  }

  findStudents(teacherID){
    models.Teacher.findById(teacherID).then(function(teacher){
      teacher.getStudents().then(function(studentData){
        console.log(`\nStudent of ${teacher.name}:`);
        studentData.forEach(function(student){
          console.log(`======================================\nStudent id: ${student.id}\nName: ${student.name}\nEmail : ${student.email}\nPhone ${student.phone}`);
        })
      })
    }).catch(function(err){
      console.log(err)
    })
  }



}

let studentTeacher = new StudentTeacherAssociation()

studentTeacher.findTeachers(10)
studentTeacher.findStudents(10)
