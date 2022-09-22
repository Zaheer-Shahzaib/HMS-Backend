
const  Nexmo = require('nexmo');
const { sequelize } = require('../../models');

const Model=require('../../models')
// const Appointment = require("../../models/appointment");
// const Slot = require("../../models/slots");
const { Appointment } = Model;
const User = require('../../models').User;



//create appointment
const appointmentCreate = async (req, res)=>{
    const newappointment = {
        Date: req.body.Date,
        StartTime: req.body.StartTime,
        EndTime:  req.body.EndTime,
        Status:req.body.Status
      }
      const info= await Appointment.create(newappointment)
     res.status(200).send(info)
}
  
  module.exports = {
    appointmentCreate,
  }