'use strict';
const {
  Model
} = require('sequelize');
const hospital = require('./hospital');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Role.belongsTo(models.User, {
      //   foreignKey: 'user_id',
      //   as: 'user'
      // });
      Role.hasMany(models.User, { as: "users",
      onDelete:"cascade",
      onUpdate:"cascade" });
      // Role.belongsTo(models.User, {
      //   as: "user",
      //   foreignKey:'userId'
        
      // });
      Role.belongsToMany(models.Permission, {
        through: 'RolePermission',
        as: 'permissions',
        foreignKey: 'RoleId'
      });
    }
  }
  Role.init({
    
    role_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    role_description:  {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};