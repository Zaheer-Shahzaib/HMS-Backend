const express=require('express')
const routerSchedule=express.Router()

const scheduleController=require('../Controllers/Appointments/schedule')
routerSchedule.post('/createschedule',scheduleController.makeSchedule)
routerSchedule.get('/getschedule',scheduleController.getshcedule)
routerSchedule.get('/getAvailableSchedule',scheduleController.getAvailableSlot)



module.exports=routerSchedule