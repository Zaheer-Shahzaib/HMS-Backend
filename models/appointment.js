'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
     
      Appointment.belongsTo(models.Diagnose, {
        as: 'diagnose',
        onDelete:"cascade",
       onUpdate:"cascade"
      })
      Appointment.belongsTo(models.Schedule, {
        as: "schedule",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Appointment.init({
    Date:DataTypes.DATE,
    StartTime:DataTypes.TIME,
    EndTime:DataTypes.TIME,
    Status:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};