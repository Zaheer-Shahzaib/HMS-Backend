const appointmentController = require("../Controllers/Appointments/Appointments_controller");

const express=require('express')
const appointmentRouter=express.Router();

appointmentRouter.post('/create',appointmentController.appointmentCreate)
appointmentRouter.get('/getappointment',appointmentController.getappointment)
appointmentRouter.get('/avalible',appointmentController.scheduleByAppointmentPatient)


module.exports=appointmentRouter
