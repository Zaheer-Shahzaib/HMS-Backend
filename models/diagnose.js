'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Diagnose extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Diagnose.belongsTo(models.Appointment, {
        as: 'diagnose',
        foreignKey: 'appId',
        onDelete:"cascade",
       onUpdate:"cascade"
      })
      Diagnose.belongsTo(models.User,{
        as:'user',
        onDelete:"cascade",
       onUpdate:"cascade"
      })
    }
  }
  Diagnose.init({
    date:DataTypes.DATE,
    diagnosis: DataTypes.STRING,
    perscriptions: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Diagnose',
  });
  return Diagnose;
};