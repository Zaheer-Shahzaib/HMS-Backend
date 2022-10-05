const express = require('express');
const router_user = express.Router();
const User = require('../models').User;
const Role = require('../models').Role;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();

const addUser= async (req,res)=>{

    //  helper.checkPermission(req.user.roleId, 'user_add').then((rolePerm) => {
      
          if (!req.body.RoleId || !req.body.email || !req.body.password || !req.body.fullname || !req.body.phone) {
            res.status(400).send({
              msg: 'Please pass Role ID, email, password, phone or fullname.'
            })
          } else {
            const info=
        {
                email: req.body.email,
                password: req.body.password,
                fullname: req.body.fullname,
                phone: req.body.phone,
                RoleId:req.body.RoleId
        }
              
              const user=await User.create(info)
              res.status(201).send(user)
              res.status(400)
          }
        // }).catch((error) => {
        //   res.status(403).send(error);
        // });
    
}

const getUser= async (req,res)=>{
    User
    .findAll()
    .then((users) => res.status(200).send(users))
    .catch((error) => {
      res.status(400).send(error);
    });
}

const getbyId=async(req,res)=>{
    User
      .findByPk(req.params.id)
      .then((user) => res.status(200).send(user))
      .catch((error) => {
        res.status(400).send(error);
      });
}
const updateUser=async (req,res)=>{
    User
        .findByPk(req.params.id)
        .then((user) => {
          User.update({
            email: req.body.email || user.email,
            password: req.body.password || user.password,
            fullname: req.body.fullname || user.fullname,
            phone: req.body.phone || user.phone,
            role_id: req.body.role_id || user.role_id
          }, {
            where: {
              id: req.params.id
            }
          }).then(_ => {
            res.status(200).send({
              'message': 'User updated'
            });
          }).catch(err => res.status(400).send(err));
        })
        .catch((error) => {
          res.status(400).send(error);
        });
}

const deleteUser= async=(req,res)=>{
    User
        .findByPk(req.params.id)
        .then((user) => {
          if (user) {
            User.destroy({
              where: {
                id: req.params.id
              }
            }).then(_ => {
              res.status(200).send({
                'message': 'User deleted'
              });
            }).catch(err => res.status(400).send(err));
          } else {
            res.status(404).send({
              'message': 'User not found'
            });
          }
        })
        .catch((error) => {
          res.status(400).send(error);
        });
}
module.exports={
    addUser,
    getUser,
    getbyId,
    updateUser,
    deleteUser
}