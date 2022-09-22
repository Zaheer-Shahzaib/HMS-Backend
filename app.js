const express=require('express')
const app=express();
app.use(express.json());
const cors=require('cors');
const cookieParser=require('cookie-parser')
var path = require('path');


//app.use(cors());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

///router
// const router_role=require('./router/roles')
// const router_permission=require('./router/permissions');
// const router_user=require('./router/users');
// const router = require('./router/auth');
// const hospital_router = require('./router/hospital');

//var indexRouter = require('./routes/index');
var usersRouter = require('./router/users');
// var router_doctor=require('./router/add_Doctor')
var rolesRouter = require('./router/roles');
var permsRouter = require('./router/permissions');
var authRouter = require('./router/auth');
var hospitalRouter=require('./router/hospital')
var appointmentRouter=require('./router/Appointment')
var slotRouter=require('./router/slots')



//app.use('/', indexRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/roles', rolesRouter);
app.use('/api/v1/hospital', hospitalRouter);
app.use('/api/v1/appointment/createAppointment',appointmentRouter)
app.use('/api/v1/slots', slotRouter);



// const hospital_router=require('./router/hospitaldetailsrouter')
// const router_patient=require('./router/patientdetailsrouter')
// const user_router=require('./router/userrouter')
// const role_router=require('./router/Role_router')
// app.use('/api/role',role_router)
// app.use('/api/user',user_router)
// app.use('/api/patient',router_patient)
// app.use('/api/hospital',hospital_router)
// app.use('/api',router_role)
// app.use('/api/user',router_user)
// app.use('/',router_permission)
// app.use('/api/hospital',hospital_router)
// app.use('/',router)


/////listinng port

const PORT = process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send(200)
   
})
app.listen(PORT,()=>{
    console.log(`Successfully Runnning....${PORT}`);
})