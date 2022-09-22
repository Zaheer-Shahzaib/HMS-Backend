const appointmentController = require("../Controllers/Appointments/Appointments_controller");

const express=require('express')
const appointmentRouter=express.Router();

appointmentRouter.post('/',appointmentController.appointmentCreate)
//appointmentRouter.get('/getappointment',appointmentController.findAppointment)


module.exports=appointmentRouter
