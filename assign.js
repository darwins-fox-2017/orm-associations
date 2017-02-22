"use strict"
let model = require('./models');

// function assignStudentToTeacher() {
//     model.Teachers.findAll().then(function(teachers) {
//         for (let i = 0; i < teachers.length; i++) {
//             console.log(teachers[i].id);
//         }
//     })
// }


function assignStudentToTeacher() {
  model.Teachers.findAll().then(function(teachers) {
          let ids = 0;
          let promisesOfTeacher = [];
          for (var i = 0; i < teachers.length; i++) {
              promisesOfTeacher.push(new Promise(function(resolve, reject) {
                  ids = teachers[i].id;
                  if (ids != 0) {
                      resolve(ids)
                      //console.log(ids);
                  } else {
                      reject('err')
                  }
              }))
          }

          Promise.all(promisesOfTeacher).then(function(ids) {
            model.Students.findAll().then(function(students){

               let j=0;
               let k=0;
               while(j<=students.length){
                 for (var i = 0; i < ids.length; i++) {
                   model.StudentTeacher.create({
                       teacherId: ids[i],
                       studentId: students[j].id
                   })
                   j++
                 }
               }

            })
          }).catch(function(err) {
              console.log(err);
          })
      })

}

assignStudentToTeacher()
