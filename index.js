"use strict"

const db = require("./models")

class StudenTeachers {
  constructor() {}

  validateEmail(){
    // Test code for validate email & phone (teachers)
    db.Teacher.create({
      Name:"Eri",Email:"eri@email.com", Phone:"08577733264"
    }).then(function(data){
      console.log("ADD DATA SUCCESSFUL")
    }).catch(function(err){
      console.log(err.message);
    })
  }
}

let studenTeacher = new StudenTeachers()

studenTeacher.validateEmail()
