const { sequelize, Sequelize } = require("../../models");

const User = require("../../models").User;
const Schedule = require("../../models").Schedule;

function createDate(date) {
	return new DateSchedule({
		date: date,
		slots: [
			new Slot({
				time: "09:00:00",
				isBooked: false,
			}),
			new Slot({
				time: "12:00:00",
				isBooked: false,
			}),
			new Slot({
				time: "15:00:00",
				isBooked: false,
			}),
		],
	});
}



const getSlots = async (req, res) => {
  try{
  // get Slots
  const userEmail = req.body.userEmail;
  const doctor = await User.findOne({
    where: {
      email: userEmail,
    },
  })
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
		return res.status(400).json({
			message: err,
		});
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
  getSlots,
  getshcedule
};
