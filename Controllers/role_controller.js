const User = require('../models').User;
const Role = require('../models').Role;
const Permission = require('../models').Permission;
const passport = require('passport');
require('../config/passport')(passport);
const Helper = require('../utils/helper');
const helper = new Helper();


const addRoll=async (req,res)=>{
   
    try {
        let info={
            role_name: req.body.role_name,
            role_description: req.body.role_description
        }
        const roled= await Role.create(info)
        console.log(roled);
        res.status(200).send(roled)
    } catch (error) {
        res.status(400).send(error)
    }

}



 const getRole= async  (req, res) =>{
   
        Role
            .findAll({
                include: [
                    {
                        model: User,
                        as: 'users',
                    }
                ]
            })
            .then((roles) => res.status(200).send(roles))
            .catch((error) => {
                res.status(400).send(error);
            });
};
const getRoleByID= async (req,res)=>{
    Role
    .findByPk(
        req.params.id, 
        // {
        //     include: {
        //         model: Permission,
        //         as: 'permissions',
        //     }
        // }
    )
    .then((roles) => res.status(200).send(roles))
    .catch((error) => {
        res.status(400).send(error);
    });
}

const updateRole=async (req,res)=>{
    Role
    .findByPk(req.params.id)
    .then((role) => {
        Role.update({
            role_name: req.body.role_name || role.role_name,
            role_description: req.body.role_description || role.role_description
        }, {
            where: {
                id: req.params.id
            }
        }).then(_ => {
            res.status(200).send({
                'message': 'Role updated'
            });
        }).catch(err => res.status(400).send(err));
    })
    .catch((error) => {
        res.status(400).send(error);
    });
}

const deleteRole=async (req,res)=>{
    Role
    .findByPk(req.params.id)
    .then((role) => {
        if (role) {
            Role.destroy({
                where: {
                    id: req.params.id
                }
            }).then(_ => {
                res.status(200).send({
                    'message': 'Role deleted'
                });
            }).catch(err => res.status(400).send(err));
        } else {
            res.status(404).send({
                'message': 'Role not found'
            });
        }
    })
    .catch((error) => {
        res.status(400).send(error);
    });
}
module.exports={
    addRoll,
    getRole,
    getRoleByID,
    updateRole,
    deleteRole
}