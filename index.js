"use strict"

let model = require('./models')
let faker = require('faker')

function addData(fullname, birthDate, email, height, phonenumber) {
  model.Students.create({fullname: fullname, birthdate: birthDate, email: email, height: height, phonenumber: phonenumber})
  .then(function(){
    console.log(`${fullname} inserted`);
  }).catch(function(err){
    console.log(err);
    console.log(`May be there are something you mis ?`);
  })
}

function generateFakeData(amont) {
  for (let i = 0; i < amont; i++) {
    addData(faker.name.findName(), faker.date.past(), faker.internet.email(), randomIntFromInterval(140, 200), faker.phone.phoneNumberFormat())
  }
}


function getAllStudentData() {
  model.Students.getAllData(function(cb){
    cb.forEach(function(res){
      console.log(res);
    })
  })
}

function getAge(){
  model.Students.getAgeFromData(function(result){
    console.log(result);
  })
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function addTeacher(name, email, phone) {
  model.Teachers.create({name: name, email: email, phone: phone})
  .then(function(){
    console.log(`${name} inserted`);
  }).catch(function(err){
    console.log(err);
    console.log(`May be there are something you mis ?`);
  })
}

function generateTeacherData(amont){
  for (let i = 0; i < amont; i++) {
    addTeacher(faker.name.findName(), faker.internet.email(), faker.phone.phoneNumberFormat())
  }
}


function whoIsMyTeacher(id) {
  model.Students.findOne({
    where:{
      id:id
    }
  }).then(function(student){
     console.log(`${student.fullname} has teachers: `);
     //console.log(student);
     student.getTeachers().then(function(teachers){
       teachers.forEach(function(teacher){
         console.log(`name :${teacher.name} | email : ${teacher.email}`);
       })
     })
})
}

function whoIsMyStudent(id) {
  model.Teachers.findOne({
    where:{
      id:id
    }
  }).then(function(teacher){
     console.log(`${teacher.fullname} has teachers: `);
     //console.log(student);
     teacher.getStudents().then(function(students){
       students.forEach(function(student){
         console.log(`name :${student.fullname} | email : ${student.email}`);
       })
     })
})
}

// whoIsMyTeacher(1)
whoIsMyStudent(1)
// generateTeacherData(9)

// addData('diky arga', 1995-10-17, 'dikyarga.id@gmail.com', 178, '0857132321331')
// generateFakeData(100)
// console.log(faker.phone.phoneNumberFormat());

// getAge()
// getAllStudentData()
// updateStudent()
