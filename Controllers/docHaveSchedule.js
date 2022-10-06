const express=require('express')
const User = require('../models').User;
const Schedule = require('../models').Schedule;


/// mapping with to table for having schedule
const docsHaveSchedules=async (req,res)=>{
 await User.findAll({
    where:{
        RoleId: '2'
    },
    include:[{
        model: Schedule,
        as:'schedule',
        attibutes:['startTime','date','endTime',]
    }
    ]
 }).then((user)=>{
    res.send(user).status(200)
 })
}

module.exports ={
    docsHaveSchedules
}