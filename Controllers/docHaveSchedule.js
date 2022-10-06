const express = require("express");
const User = require("../models").User;
const Role = require("../models").Role;
const Schedule = require("../models").Schedule;
const docHaveSchedule = require("../models").DocsHaveSchedules;

const { sequelize, Sequelize } = require("../models");
/// mapping with to table for having schedule
const docsHaveSchedules = async (req, res) => {
  const schedule = await User.findOne({
    where: {
      RoleId: req.params.id,
    },
    attributes: ["id", "fullName", "email", "RoleId"],
    required: true,
    nest: true,
    include: [
      {
        model: Schedule,
        as: "schedule",
        attributes: ["id", "startTime", "endTime", "days", "userId"],
        where: {
          state: Sequelize.col("Schedule.UserId"),
        },
        required: true,
        raw: true,
      },
    ],
  });
  const trial = schedule ? schedule.get({ plain: true }) : null;
  //console.log(trial.schedule[1].days);

  for (let index = 0; index < trial.schedule.length; index++) {
    const element = trial.schedule[index].id;
    //const userId = schedule[index].UserId;
    if (element===null) {
      res.send("Schedule was not found along this user").status(400);
    } else {
      await docHaveSchedule.create({
        userId: schedule.id,
        scheduleId: element,
      });
    }
  }
  //res.send("Mapping has been created").status(200);
  res.send(schedule+"Mapping has been created").status(200)
};

const getscheduleOnUserBase= async (req,res)=>{
   const get= await docHaveSchedule.findAll({
        where:{
            scheduleId:req.params.id
        },
        include:[{
            model:Schedule,
            as:'schedule',
            include:[{
                model:User,
                as:'User'
            }]
        }]
    })
    res.send(get)
    
}

module.exports = {
  docsHaveSchedules,
  getscheduleOnUserBase
};
