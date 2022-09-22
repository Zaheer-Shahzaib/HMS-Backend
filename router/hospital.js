const express=require('express');

const user = require('../models/user');
const Role=require('../models').Role
const hospital_router=express.Router();
const User = require('../models').User;
const doc_controller=require('../Controllers/hospital_controller')


hospital_router.post('/addDoctor',doc_controller.addDoctor )


hospital_router.get('/:id/getdoctor', doc_controller.getDoctor)

module.exports=hospital_router