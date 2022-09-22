
const models = require("../models");
const database=require('../Config/database');
const { sequelize } = require("../models");

const Patients = models.patients_attributes;

const addPatient = async (req, res) => {
  let info = {
    patient_id: req.body.patients_id,
    patient_name: req.body.patient_name,
    patient_mobile: req.body.patient_mobile,
    patient_email: req.body.patient_email,
    patient_username: req.body.patient_username,
    patient_password: req.body.patient_password,
    patient_address: req.body.patient_address,
    patient_blood_group: req.body.patient_blood_group,
  };
  const patient_attr= await Patients.create(info)
   res.status(200).send(patient_attr)
};

const getAllPatient= async (req,res)=>{
  const patient_attr= await Patients.findAll({})
  res.status(200).send(patient_attr)
}

const getPatientById= async (req,res)=>{
  const id=req.params.patient_id;
  const patient_attr= await Patients.findOne({
    where:{
patient_id:id
    }
  })
  res.status(200).send(patient_attr)
}

///issues
const updatePatientById=async (req,res)=>{
  try {
    const name =req.params.patient_name
    const patient_attr= await Patients.update(req.body,{
      where:{
        patient_name:name
          }
    })
    res.status(200).send(patient_attr)

  } catch(err){
    throw err
  }
 
}

const deleteById= async (req,res)=>{
  const id=req.params.patient_id
   await Patients.destroy({where:{patient_id:id}})
    res.status(200).send("Patient Succefully Deleted")
  
}
// const searchPatient =async (req, res) =>{
//     const {term}= req.body.JSON
//     const attr = await Patients.findAll({where:{patients_attributes:{[Op.patient_name]:"%" +term+"%"}}})

//         res.send(JSON.stringify(attr));
// }


module.exports={
    addPatient,
    getAllPatient,
  getPatientById,
  updatePatientById,
  deleteById,
  // searchPatient

}