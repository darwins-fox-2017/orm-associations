"use strict"

const db = require("./models")

class StudentTeacher {

  static createTeacher(){
    db.Teacher.create({
      name:"Romo Bagus",email:"romobagus@gmail.com", phone:"081263301159"
    }).then(function(data){
      console.log("create new data success")
    }).catch(function(err){
      console.log(err.message);
    })
  }

  static assignToStudentTeacher(){
    db.Teacher.findById(2).then(function(teacher){
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

  static findStudents(id){
    db.Teacher.findById(id).then(function(get){
      get.getStudents().then(function(data){
        data.forEach(function(data){
          console.log();
          console.log(`Student id: ${data.id}\nname: ${data.firstname} ${data.lastname}\nAge : ${data.getAge()} years`);
        })
      })
    }).catch(function(err){
      err ? console.log(err.message):console.log(``)
    })
  }

  static findTeachers(id){
    db.Student.findById(id).then(function(get){
      get.getTeachers().then(function(data){
        data.forEach(function(data){
          console.log(`Teacher id: ${data.id}\nName: ${data.name}\nemail : ${data.email}\nPhone : ${data.phone}`);
        })
      })
    }).catch(function(err){
      err ? console.log(err.message):console.log(``)
    })
  }

}


//DRIVER TEST CODE
//StudentTeacher.createTeacher() // email validation, phone validation
// StudentTeacher.assignToStudentTeacher()
StudentTeacher.findStudents(1) //check associate
//StudentTeacher.findTeachers(1) //check associate
//studenTeacher.addToStudenTeacher() //Insert into studenTeacher
