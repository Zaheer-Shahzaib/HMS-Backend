
const  Nexmo = require('nexmo');
const { sequelize, Sequelize } = require('../../models');

const Model=require('../../models');

// const Appointment = require("../../models/appointment");
// const Slot = require("../../models/slots");
const { Appointment } = Model;
const User = require('../../models').User;
const Schedule = require('../../models').Schedule;
const moment =require('moment')

var flag= false
//create appointment
const appointmentCreate = async (req, res)=>{
  const date = moment().format("MM:DD:YYYY");
  console.log(date);
  const scheduleId= req.body.scheduleId
  const doctorFind= await User.findOne({
   include:[{
    model:Schedule,
    as:'schedule',
    where:{state:Sequelize.col(`schedule.id`)}
   }]
  })
  if(doctorName.length===0){
    res.send("No doctor Find").status(400)
  }
  else
    {const newappointment = {
        UserId:doctorFind.id,
        scheduleId:scheduleId,
        Date: date,
        StartTime: req.body.StartTime,
        EndTime:  req.body.EndTime,
        Status:flag
      }
      const info= await Appointment.create(newappointment)
     res.status(200).send(info)}
}
  
const getappointment=async (req, res)=>{
  const findeApp=await Appointment.findAll({
   // limit:2,
    include:[{
      model:Schedule,
      as:'schedule',
      where:{state:Sequelize.col("Appointment.scheduleId")}
    }]
  })
  res.send(findeApp)
}

const scheduleByAppointmentPatient =async (req,res)=>{
   const AvailivableSchedule= await Schedule.findAll()
   res.send(AvailivableSchedule).status(200)
}


  module.exports = {
    appointmentCreate,
    getappointment,
    scheduleByAppointmentPatient
  }