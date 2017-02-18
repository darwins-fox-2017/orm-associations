"use strict"

const db = require("./models")

class StudenTeachers {
  constructor() {}

  validateEmail(){
    db.Teacher.create({
      Name:"Eri",Email:"eri@email.com", Phone:"08577733264"
    }).then(function(data){
      console.log("ADD DATA SUCCESSFUL")
    }).catch(function(err){
      console.log(err.message);
    })
  }

  addToStudenTeacher(){
    db.Teacher.findById(1).then(function(teacher){
      db.Student.findById(1).then(function(student){
        student.setTeachers(teacher)
      })
    })

    db.Teacher.findById(2).then(function(dataTeacher){
      db.Student.findById(2).then(function(datastudent){
        datastudent.addTeachers(dataTeacher)
      })
    })
  }

  findStudents(id){
    db.Teacher.findById(id).then(function(get){
      get.getStudents().then(function(data){
        data.forEach(function(data){
          console.log(`\n======RESULT=======\nStudent id: ${data.id}\nname: ${data.firstName} ${data.lastName}\nAge : ${data.getAge()} years`);
        })
      })
    }).catch(function(err){
      err ? console.log(err.message):console.log(``)
    })
  }

  findTeachers(id){
    db.Student.findById(id).then(function(get){
      get.getTeachers().then(function(data){
        data.forEach(function(data){
          console.log(`\n======RESULT=======\nTeacher id: ${data.id}\nName: ${data.Name}\nEmail : ${data.Email}\nPhone : ${data.Phone}`);
        })
      })
    }).catch(function(err){
      err ? console.log(err.message):console.log(``)
    })
  }

}

let studenTeacher = new StudenTeachers()

// studenTeacher.validateEmail()//Test code for validate email & phone (teachers)
// studenTeacher.findStudents(2)//check associate
studenTeacher.findTeachers(1)//check associate
// studenTeacher.addToStudenTeacher()//Insert into studenTeacher
