"use strict"
let model = require('./models');


function assignTeacher() {
    model.teacher.findAll().then(function(teachers) {
        let ids = 0;
        let promisesteacher = [];
        for (var i = 0; i < teachers.length; i++) {
            promisesteacher.push(new Promise(function(resolve, reject) {
                ids = teachers[i].id;
                if (ids != 0) {
                    resolve(ids)
                    //console.log(ids);
                } else {
                    reject('err')
                }
            }))
        }

        Promise.all(promisesteacher).then(function(ids) {
          model.student.findAll().then(function(students){
             let j=0;
             let k=0;
             while(j<students.length){
               for (var i = 0; i < ids.length; i++) {
                 model.student.update({
                     teacher_id: ids[i]
                 }, {
                     where: {
                         id: students[j].id
                     }
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



function insertStudent(firstName, lastName, birthDate, email, height, phoneNumber) {
    model.student.create({
        firstname: firstName,
        lastname: lastName,
        birthdate: birthDate,
        email: email,
        height: height,
        phonenumber: phoneNumber
    }).
    then(function() {
            console.log('data inserted');
        })
        .catch(function(err) {
            console.log(err.message);
        })
}

function insertTeacher(firstName, lastName, birthDate, email, height, phoneNumber) {
    model.student.create({
        firstname: firstName,
        lastname: lastName,
        birthdate: birthDate,
        email: email,
        height: height,
        phonenumber: phoneNumber
    }).
    then(function() {
            console.log('data inserted');
        })
        .catch(function(err) {
            console.log(err.message);
        })
}

//insertStudent('ahmad', 'muzakir', '1990-1-11','admad@muzakir.com', 160,'081239002200');

function findAllUser() {
    model.student.findAll({
        include: [
            model.teacher
        ]
    }).then(function(students) {
        students.forEach(function(student) {
            console.log(`id : ${student.id} | name: ${student.getFullName()} | email: ${student.email} | teacher name : ${student.teacher.name}`);
        })
    })
}

findAllUser();
//assignteacher()
// model.student.update({
//   teacher_id:1
// },{
//   where:{
//     id:1
//   }
// })
