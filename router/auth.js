const express = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const router = express.Router();
require('../config/passport')(passport);
const User = require('../models').User;
const Role = require('../models').Role;
const auth_controller=require('../Controllers/auth_controller')
router.post('/signup', auth_controller.signUp);

router.post('/login', auth_controller.login);



module.exports = router;