const express=require('express')
const docrouter=express.Router()
const docsHaveSchedules=require('../Controllers/docHaveSchedule')


docrouter.get('/havingschedule/:id',docsHaveSchedules.docsHaveSchedules)
docrouter.get('/userSchedule/:id',docsHaveSchedules.getscheduleOnUserBase)
module.exports=docrouter