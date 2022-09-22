const express=require('express')
const slotRouter=express.Router();
const slotController = require("../Controllers/Appointments/schedule");


slotRouter.get('/getSlots/:id',slotController.findAllSlots)
slotRouter.post('/createslots',slotController.creadeSlot)


module.exports=slotRouter