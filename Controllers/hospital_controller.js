const express = require("express");
const { Op } = require("sequelize");
const app = express();
const { sequelize, Sequelize } = require('../models');
const User = require('../models').User;
const Role = require("../models").Role;

const Hospital = require('../models/hospital')(sequelize, Sequelize.DataTypes,
  Sequelize.Model);

const addDoctor=async (req, res)=>{
  if (!req.body.role_name || !req.body.email || !req.body.password || !req.body.fullname || !req.body.phone) {
    res.status(400).send({
      msg: 'Please pass Role ID, email, password, phone or fullname.'
    })
  } else {
    Hospital.findOne({
        where: {
            id:req.body.hospitalId
                    }
    })
    const info={
      RoleId:req.body.RoleId,
      hospitalId:req.body.hospitalId,
      email: req.body.email,
      password: req.body.password,
      fullname: req.body.fullname,
      phone: req.body.phone,
    }
    const doctor= await User.create(info)
    res.status(201).send(doctor)
  }
}
const getDoctor =async(req,res)=>{
  try {
User.findOne({
  where:req.Role.id
}).then((role)=>{
  console.log(role.id)
  const findAll= await
    User.findAll({ 
     where:{
      [Op.and]:{
        hospitalId:User.hospitalId   
      }
     
     }
   })
   res.status(200).send(findAll)
})
    
 
  } catch (error) {
    res.status(400).send(error)
  }
  
}

module.exports={
  addDoctor,
  getDoctor
}
