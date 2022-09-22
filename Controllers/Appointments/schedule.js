
const { sequelize, Sequelize } = require('../../models');
const Slot = require('../../models/slots')(sequelize, Sequelize.DataTypes,
    Sequelize.Model);
    const appointment = require('../../models').Appointment;

const creadeSlot = async (req, res) =>{
      // Create Slots
      const info={
        slot_time: req.body.slot_time,
        slot_date: req.body.slot_date,
      }
      const slot=await Slot.create(info)
      res.status(200).send(slot) 
    }
    const findAllSlots= async(req,res)=>{
        const slot=await Slot.findAll({})
        res.send(slot).status(slot)
   
    res.send(slot)

    
    }
module.exports = {
    creadeSlot,
    findAllSlots
  }