const { sequelize, Sequelize } = require("../../models");

const User = require("../../models").User;
const Schedule = require("../../models").Schedule;
const Slots = require("../../models").Slots;

// function createDate(date) {
// 	return new DateSchedule({
// 		date: date,
// 		slots: [
// 			new Slot({
// 				time: "09:00:00",
// 				isBooked: false,
// 			}),
// 			new Slot({
// 				time: "12:00:00",
// 				isBooked: false,
// 			}),
// 			new Slot({
// 				time: "15:00:00",
// 				isBooked: false,
// 			}),
// 		],
// 	});
// }
/////get availabelSlot in given date
const getAvailableSlot=async (req,res)=>{
  try {
     const date= req.body.date
     const id=req.body.doctorId
     const doctor= await User.findOne({
      where:{
        id:id
      }
     })
     if(doctor===null){
      res.send('Doctor was not found').status(201)
     }

     let count =0
     for( const i of Slots.slot_date){
      if(i.date===date){
        return res.send(i).status(200)
      }
      else{
      res.send("Slot was not found on given date in the database").status(201)
      }
      count++
     }
    
    
  } catch (error) {
    return res.status(400).json({
			message: error,
    })
  }
}

const makeSchedule = async (req, res) => {
  try{
  // make schedule by the doctor.
  const userEmail = req.body.userEmail;
  const doctor = await User.findOne({
    where: {
      email: userEmail,
    },
  })
  if(doctor===null){
    res.send("User was not found in database").status(201).json({
      message:"User was not found"
    })
  }
  const info={
    UserId:doctor.id,
    startTime:req.body.startTime,
    endTime:req.body.endTime,
    date:req.body.date,
    breakTime:req.body.breakTime,
    days:req.body.days
  }
  
  const createSchedule=await Schedule.create(info)
  res.status(200).send(createSchedule)
}catch(err){
  //console.log(err);
		return res.status(400).send(err)
}


};
const getshcedule= async (req, res)=>{
  const findDoctor=await Schedule.findAll({
    include:[{
      model:User,
      as:"User",
      where:{state: Sequelize.col('Schedule.UserId')}
    }]
  })
  res.status(200).send(findDoctor)
}



module.exports = {
  makeSchedule,
  getshcedule,
  getAvailableSlot
};
