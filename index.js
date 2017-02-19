"use strict"

const db = require("./models")

//Contoh data guru yang valid:
// db.Teachers.create({name: 'Rubi Henjaya', email: 'rubicorps@gmail.com', phone: '08123456789'})
//   .then(function(teacher) {
//     console.log("Success record data teacher");
// }).catch(function(err) {
//   console.log(err.message);
// })
//
// db.Teachers.create({name: 'Riza Fahmi', email: 'riza@yahoomail.com', phone: '08128231512'})
//   .then(function(teacher) {
//     console.log("Success record data teacher");
// }).catch(function(err) {
//   console.log(err.message);
// })
//
// db.Teachers.create({name: 'Windiana Krismanuyar', email: 'windi@gmail.com', phone: '08123456789'})
//   .then(function(teacher) {
//     console.log("Success record data teacher");
// }).catch(function(err) {
//   console.log(err.message);
// })
//

//Contoh data guru yang TIDAK valid:
// db.Teachers.create({name: 'M Haidar Hanif', email: 'mhaidar@gmail.com', phone: '087880551'})
//   .then(function(teacher) {
//     console.log("Success record data teacher");
// }).catch(function(err) {
// console.log(err.message);
// })

//Contoh data (email, height, phone) yang valid:
// db.Students.create({
//   name:'izumi', birthdate:'1989-02-07', email:'izumi@gmail.com', phone:'081234567890'
// }).then(function(data) {
//   console.log("Success record data student");
// }).catch(function(err) {
// console.log(err.message);
// })
//
// db.Students.create({
//   name: 'Karina', birthdate:'1989-02-07', email: 'karina@gmail.com', phone: '08159070289'
// }).then(function(teacher) {
//   console.log("Success record data student");
// }).catch(function(err) {
// console.log(err.message);
// })


//Contoh data (email, height, phone) yang tidak valid:
// db.Students.create({
//   name:'isumi', birthdate:'1989-01-01', email:'isumi_karina@yahoo.co.id', phone:'081234567'
// }).then(function(data) {
//   console.log("Success record data", data);
// })

class Student {
  constructor () {}
//
  static findStudents(teacherId){
    db.Teachers.findById(teacherId).then(function(get){
      get.getStudents().then(function(data){
        data.forEach(function(data){
          console.log(`Student ID: ${data.id}\nName: ${data.name}`);
        })
      })
    })
  }

  static findTeachers(studentId){
    db.Students.findById(studentId).then(function(get){
      // console.log("------1",get);
      get.getTeachers().then(function(data){
        // console.log("---2", data);
        data.forEach(function(data){
          console.log(`Teacher ID: ${data.id}\nName: ${data.name}`);
        })
      })
    })
  }

  static validateData(){
    db.Students.create(
      {name: "Isumizumi", email: "isumizumi@gmail.com", phone: "08159070289"})
      .then(function(data){
      console.log(":: Record Data is Valid ::")
    }).catch(function(err){
      console.log(err);
    })

    db.Teachers.create(
      {name: "Windi", email: "windi@gmail.com", phone: "0811223344"})
      .then(function(data){
      console.log(":: Record Data is Valid ::")
    }).catch(function(err){
      console.log(err);
    })
  }
  //First Running!
  static checkData(){
    db.Teachers.findById(1).then(function(teacher){
      db.Students.findById(2).then(function(student){
        student.setTeachers(teacher)
      })
    })
    db.Teachers.findById(1).then(function(teacher){
      db.Students.findById(2).then(function(student){
        student.addTeachers(teacher)
      })
    })
  }
}


Student.findStudents(1)
Student.findTeachers(2)
// Student.validateData()
// Student.checkData()
