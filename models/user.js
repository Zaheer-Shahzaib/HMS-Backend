"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcryptjs");
const hospital = require("./hospital");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // User.hasOne(models.Role, {
      //   foreignKey: "user_id",
      //   as: "role",
      // });
      User.belongsTo(models.hospital, {
        foreignKey: "hospitalId",
        as: "hospital",
        onDelete:"cascade",
        onUpdate:"cascade"
      });
      User.belongsTo(models.Role, {
        foreignKey: "RoleId",
        as: "role",
        onDelete:"cascade",
        onUpdate:"cascade"
      });
      
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeSave(async (user, options) => {
    if (user.password) {
      user.password = bcrypt.hashSync(
        user.password,
        bcrypt.genSaltSync(10),
        null
      );
    }
  });
  User.prototype.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    });
  };
  return User;
};
