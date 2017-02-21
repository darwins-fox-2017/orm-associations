"use strict"


var models = require('./models')


models.Teacher.create({name:'Danang Aji Tamtomo',email:'johndummy1@dummy.com',phone:'0124115121'})
.catch(function(error) {
   console.log(error.message) 
})