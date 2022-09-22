const express = require("express");
const router_role = express.Router();
const User = require("../models").User;
const Role = require("../models").Role;
const Permission = require("../models").Permission;
const passport = require("passport");
require("../config/passport")(passport);
const Helper = require("../utils/helper");
const role_controller = require("../Controllers/role_controller");
const helper = new Helper();


// // Create a new Role
router_role.post("/addrole", role_controller.addRoll);
// Get List of Roles
router_role.get(
  "/",
//   passport.authenticate("jwt", {
//     session: false,
//   }),
  role_controller.getRole
);

// Get Role by ID
router_role.get(
  "/:id",
//   passport.authenticate("jwt", {
//     session: false,
//   }),
  role_controller.getRoleByID
);

// Update a Role
router_role.put("/:id", role_controller.updateRole);

// Delete a Role
router_role.delete("/:id",
  role_controller.deleteRole
);


module.exports = router_role;
