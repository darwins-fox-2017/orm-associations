"use strict"

let db = require("./models")

function findStudentByTeacher(id) {
  db.Teacher.findById(id).then(function(teacher) {
    teacher.getStudents().then(function(students) {
      students.forEach(function(student) {
        console.log(`ID : ${student.id}\nFirst Name : ${student.firstname}\nEmail : ${student.email}\nTeacher Name : ${teacher.name}\n`);
      })
    })
  })
}

function findTeacherByStudent(id) {
  db.Students.findById(id).then(function(student) {
    student.getTeachers().then(function(teachers) {
      teachers.forEach(function(teacher) {
        console.log(`ID : ${teacher.id}\nFull Name : ${teacher.name}\nEmail : ${teacher.email}\nPhone : ${teacher.phone}\n`)
      })
    })
  })
}

findStudentByTeacher(3)

findTeacherByStudent(15)

// db.Students.create({
//   firstname: "fwef",
//   lastname: "lerjgmerg",
//   birthdate: "1996-11-24",
//   email: "rtyuikl2@gmail.com",
//   height: 100,
//   Phone: "0812146692919"
// }).then(function(data) {
//   console.log(data.height)
// }).catch( (err) => {
//   console.log(err.message)
// })

// db.Students.findAll().then(function(students) {
//   students.forEach(function(student) {
//     console.log("First Name :", student.firstname)
//     console.log("Last Name :", student.lastname);
//     console.log("Nama Lengkap :", student.getFullName());
//     console.log("Birth Date :", student.birthdate);
//     console.log("---", student.getAge());
//     console.log();
//   })
//
// })

// db.Students.getAllData( function(data) {
//   data.forEach(function(data) {
//     console.log(data.id);
//     console.log("Full Name :",data.full_name);
//     console.log("First Name :",data.firstname);
//     console.log("Last Name :",data.lastname);
//     console.log("Email :",data.email);
//     console.log("Phone :",data.Phone);
//
//     console.log()
//   })
// })


// db.Students.find({
//   where: {id: 1}
// }).then(function(Students) {
//   console.log()
// })
