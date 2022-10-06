const express=require('express')
const docrouter=express.Router()
const docsHaveSchedules=require('../Controllers/docHaveSchedule')


docrouter.get('/havingschedule',docsHaveSchedules.docsHaveSchedules)

module.exports=docrouter