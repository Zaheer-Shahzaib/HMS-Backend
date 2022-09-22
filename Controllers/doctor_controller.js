const express = require("express");

const app = express();
const db = require("../models");
const uuid=require('uuid')

const Hospital = db.hospital_attributes;
const Doctor = db.doctor_attributes;

const addDoctor = async (req, res) => {
  //console.log(req.body);
  let info = {
    id: req.body.id,
    doctor_name: req.body.doctor_name,
    doctor_specialist: req.body.doctor_specialist,
    doctor_mobile: req.body.doctor_mobile,
    doctor_email: req.body.doctor_email,
    doctor_username: req.body.doctor_username,
    doctor_password: req.body.doctor_password,
    doctor_address: req.body.doctor_address,
  };
const doctor_attributes= await Doctor.create(info)
res.status(200).send(doctor_attributes)
};

module.exports = {
  addDoctor
};
