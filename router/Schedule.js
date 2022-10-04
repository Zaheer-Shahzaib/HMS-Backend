const express=require('express')
const routerSchedule=express.Router()
const scheduleController=require('../Controllers/Appointments/schedule')

routerSchedule.post('/getshcedule',scheduleController.getSlots)
routerSchedule.get('/getshcedule',scheduleController.getshcedule)
module.exports=routerSchedule