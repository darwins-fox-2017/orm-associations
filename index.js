"use strict"


var models = require('./models')


// models.Student.create({name:'Student one'})
// .catch(function(error) {
//    console.log(error.message) 
// })
// models.Student.create({name:'Student two'})
// .catch(function(error) {
//    console.log(error.message) 
// })
// models.Student.create({name:'Student three'})
// .catch(function(error) {
//    console.log(error.message) 
// })

// models.Teacher.findById(1)
// .then(function(teacher) {
//     models.Student.findById(1)
//     .then(function(student) {
//         teacher.setStudents([student]).then(function() {
//             teacher.getStudents()
//             .then(function(studentsAssoc) {
//                 console.log(studentsAssoc.name)
//             })
//         })
//     })
// })

// models.Teacher.findById(1)
// .then(function(teacher) {
//     teacher.getStudents()
//     .then(function(students) {
//         console.log(students[0].name)
//     })
// }

models.Teacher.findAll({
    include:[{
        model: models.Student
    }]
}).then(function(teachers) {
    teachers.forEach(function(teacher) {
        teacher.Students.forEach(function(student) {
            console.log(student.name)
        })
        // console.log(teacher.Student.name)
    })
})