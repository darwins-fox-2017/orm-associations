"use strict"
let db = require('./models');

db.Student.findAll({ include: [{model: db.Teacher}] })
.then(function(result) {
  console.log(`School`)
  result.forEach(function(data) {
    console.log(`nama murid: ` + `${data.first_name} ${data.last_name}`);
    console.log(`nomor guru: ` + data.teacherId);
    console.log(`nama guru: ` + data.Teacher.name);       // hasil relasi
    console.log(`email guru: ` + data.Teacher.email);     // hasil relasi
    console.log(`-------------------------`);
  })
})
