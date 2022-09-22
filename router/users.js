const express = require('express');
const router_user = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();
const user_controler=require('../Controllers/user_controller')

// Create a new User
router_user.post('/',
// passport.authenticate('jwt', {session: false}),
user_controler.addUser)

// Get List of Users
router_user.get('/', passport.authenticate('jwt', {session: false}), user_controler.getUser)


// Get User by ID
router_user.get('/:id', passport.authenticate('jwt', {
  session: false
}), user_controler.getbyId
);

// Update a User
router_user.put('/:id', 
// passport.authenticate('jwt', {
//   session: false
// }), 
user_controler.updateUser
);

// Delete a User
router_user.delete('/:id', passport.authenticate('jwt', {
  session: false
}),user_controler.deleteUser);

module.exports = router_user;