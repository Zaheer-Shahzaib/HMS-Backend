# HMS-Backend
**Hospital Management Systems**

This Activity shows the flow between the activity of Doctor, Patient, Hospital and Super Admin. This is the main activity involved in this project  

- Super Admin 
- Doctor 
- Hospital Admin 
- Patient  
## Features of this main activity is to manage the Following features.
**Register/Login** 
**There should be and option to Register/Login following users**  
- Hospital  
- Doctor  
- Patient 

**On Login Based type of user navigate to respective view.**

## Hospital 
Hospital admin users should be able to add/remove registered doctors in hospitals. 
Hospital admin should be able to view listing and details of doctors which are added in the hospital. 
Hospital admin can view the list of patients who booked appointments with the doctors which are linked to their hospital. 
Hospital admin should able to view the schedule of the doctors who are in the hospital list. 
## Doctor 
Doctor should be able to view the details of hospital which they are linked to. A doctor can also link himself to any hospital. Or remove himself from hospital. Doctor should be able to set his schedule to book appointment. In a set schedule, doctors should be able to select working days and working time. Schedule will be recursive. This means that every week on working days at working time appointment can booked by patient. On appointment booked by the patient. The doctor will be notified about the appointment. After appointment, a prescription written by the doctor sent to patient and patient should be notified of the prescription. Doctor can view whole history of patient any time (old record of patient, like old prescriptions and illness.) List of patient visited/book appointment with the doctor should be visible to doctor. Doctors should be able to search for the patient who visited him. 
## Patient  
Should able to view/search all the doctors registered in system along with their specialization. Should be able to view details of doctor. Should be able to book appointments with doctor on doctor’s given time slots/schedule. Appointments should be in the 30 min time slot. Appointments should not overlap with already booked times. Can view his/her history (old appointments, illness and prescriptions.) The patient should be able to start the video call at the booked time 
## Admin  
**Should be able to view the stats.**
Number of hospitals registered. 
Number of doctors registered. 
Number of patients registered. 
**Should be able to view the details of hospital/doctors/patients.**

```
Technologies used
├── NodeJS (v16.13.2) 
├── Passport.Js for Authentication
├── Express.Js Framework
├── Sequelize ORM
├── MySQL using xampp server 
├── Migrations with Sequelize CLI for Sequelize models 
├── Middleware validation. 
├── Use of async await in asynchrony method.
```

### ☄ Tecnhnologies
<a href="https://nextjs.org">React</a>
