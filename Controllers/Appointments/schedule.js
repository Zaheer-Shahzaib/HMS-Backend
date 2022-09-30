// const { sequelize, Sequelize } = require("../../models");
// const Slot = require("../../models/slots")(
//   sequelize,
//   Sequelize.DataTypes,
//   Sequelize.Model
// );
// const Appointment = require("../../models").Appointment;
// const User = require("../models").User;
// function createDate(date) {
//   return new DateSchedule({
//     date: date,
//     slots: [
//       new Slot({
//         time: "09:00:00",
//         isBooked: false,
//       }),
//       new Slot({
//         time: "12:00:00",
//         isBooked: false,
//       }),
//       new Slot({
//         time: "15:00:00",
//         isBooked: false,
//       }),
//     ],
//   });
// }

// const getSlots = async (req, res) => {
//   try{

 
//   // get Slots
//   const id = req.body.doctorId;
//   const date = req.body.date;
//   const doctor = await User.findOne({
//     where: {
//       id: id,
//     },
//   });
//   //if doctor was not found
//   if (doctor === null) {
//     console.log("Doctor was not Found in database");
//     return res.status(201);
//   }
//   ///doctor found
//   //find the date

//   let count = 0;
//   for (const i of doctor.dates) {
//     if (i.date === date) {
//       return res.status(200).json(i);
//     }
//     count++;
//   }
//   const oldlength = count;

//   //add a new slots if date not found in the db
//   const dateSchedule = createDate(date);
//   const updatedDoctor = await User.findOneAndUpdate(
//     { id: doctor.id },
//     { $push: { dates: dateSchedule } },
//     { new: true }
//   );
//   if (updatedDoctor) {
//     return res.status(200).json(updatedDoctor.dates[oldlength]);
//   } else {
//     const err = { err: "an error occurred!" };
//     throw err;
//   }
// }catch(err){
//   console.log(err);
// 		return res.status(400).json({
// 			message: err,
// 		});
// }
// };


// router.route("/book-slot").post((req, res) => {
// 	const patientId = req.body.patientId; // Patient's google id
// 	const patientName = req.body.patientName; // Patient's name
// 	const doctorId = req.body.doctorId; // Doctor's id 606460d2e0dd28cc76d9b0f3 
// 	const slotId = req.body.slotId; // Id of that particular slot
// 	const dateId = req.body.dateId; // Id of that particular date
	

// 	User.findOne({
//     where:{
//     id: doctorId
//   }  }).then((doctor) => {
// 		const date = doctor.dates.id(dateId);
// 		const slot = date.slots.id(slotId);
// 		slot.isBooked = true;
// 		doctor
// 			.save()
// 			.then(() => {
// 				// Create an entry in the appointment database
// 				const newAppointment = new Appointment({
// 					doctorId,
// 					dateId,
// 					slotId,
// 					patientId,
// 					date: date.date,
// 					slotTime: slot.time,
// 					doctorName: doctor.name,
// 					doctorEmail: doctor.email,
// 					patientName: patientName,
// 					googleMeetLink: meetLink,
// 					feedback: new Feedback()
// 				});

// 				console.log(newAppointment);

// 				newAppointment
// 					.save()
// 					.then((appointment) => {
// 						return res.status(200).json(appointment);
// 					})
// 					.catch((err) => {
// 						console.log(err);
// 						res.status(400).json(err);
// 					});
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 				res.status(400).json({
// 					message: `An error occurred : ${err}`,
// 				});
// 			});
// 	});
// });










// module.exports = {
//   getSlots,
// };
