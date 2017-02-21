"use strict"
let model = require('./models');

class studentMenu {
  static showAllStudent() {
      model.student.findAll().then(function(students) {
         students.forEach(function(student) {
              console.log(`id : ${student.id} | name: ${student.getFullName()} | email: ${student.email} `);
          })
      })
  }

  static showTeacherOfstudent(id){
    model.student.findOne({where:{id:id}}).then(function(student){
      console.log(`${student.firstname} has teachers: `);
      //console.log(student);
      student.getTeachers().then(function(teachers){
        teachers.forEach(function(teacher){
          console.log(`name :${teacher.name} | email : ${teacher.email}`);
        })
      })
    })
  }

  static insertStudent(firstName, lastName, birthDate, email, height, phoneNumber) {
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

  static deleteStudent(id){
    model.student.destroy({
        where: {
            id: id
        }
    }).then(function() {
        console.log('delete task success');
    }).catch(function(err) {
        console.log(err.massage);
    });
  }

  static updateStudent(id,field,value){
    model.student.update({
        field:value
    },{
        where: {
            id: id
        }
    }).then(function() {
        console.log('delete task success');
    }).catch(function(err) {
        console.log(err.massage);
    });
  }


}

class teacherMenu{
  static assignTeacher() {
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
                   model.studentTeacher.create({
                       teacherId: ids[i],
                       studentId:students[j].id
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
  static updateTeacher(id,field,value){
    model.teacher.update({
        field:value
    },{
        where: {
            id: id
        }
    }).then(function() {
        console.log('delete task success');
    }).catch(function(err) {
        console.log(err.massage);
    });
  }
  static insertTeacher( name, email, phoneNumber) {
      model.teacher.create({
          name: firstName,
          email: email,
          phonenumber: phoneNumber
      }).
      then(function() {
              console.log('data inserted');
          })
          .catch(function(err) {
              console.log(err.message);
          })
  }

  static deleteTeacher(id){
    model.teacher.destroy({
        where: {
            id: id
        }
    }).then(function() {
        console.log('delete task success');
    }).catch(function(err) {
        console.log(err.massage);
    });
  }

  static studentByteacher(id){
    model.teacher.findAll({where:{id:id}}).then(function(teachers){
      teachers.forEach(function(teacher){
        console.log(`teacher ${teacher.name} has student :`);
        teacher.getStudents().then(function(students){
          students.forEach(function(student){
            console.log(`name : ${student.firstname} ${student.lastname} | email :${student.email} `);
          })
        })
      })
    })

  }

static findTeacher(){
  model.teacher.findAll()
}

}


//teacherMenu.studentByteacher(1)



//teacherMenu.studentByteacher(1)

//studentMenu.showAllStudent()
studentMenu.showTeacherOfstudent(1)
//teacherMenu.assignTeacher()

//insertStudent('ahmad', 'muzakir', '1990-1-11','admad@muzakir.com', 160,'081239002200');



//findAllUser();
//assignteacher()
// model.student.update({
//   teacher_id:1
// },{
//   where:{
//     id:1
//   }
// })
