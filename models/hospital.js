'use strict';
const {
  Model
} = require('sequelize');
const bcrypt=require('bcryptjs');
const User=require('./user')
module.exports = (sequelize, DataTypes) => {
  class hospital extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    //   hospital.hasMany(models.User, { as: "users",
    //   onDelete:"cascade",
    //   onUpdate:"cascade"
    // });
      // Role.belongsToMany(models.Permission, {
      //   through: 'RolePermission',
      //   as: 'permissions',
      //   foreignKey: 'role_id'
      // });
    }
  }
  hospital.init({
   email: {
   type: DataTypes.STRING,
   allowNull: false,
      unique: true
  },
    hospital_name: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    address:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    type:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type:DataTypes.STRING,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'hospital',
  });

  

  hospital.beforeSave(async (user, options) => {
    if (user.password) {
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);

    }
  });
  hospital.prototype.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
  };
  return hospital;
};
