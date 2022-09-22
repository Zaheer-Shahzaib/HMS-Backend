'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slots extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //  Slots.belongsTo(models.Appointment,{
    //   as: 'appointment',
    //   foreignKey:'appointmentId' 
  
    //  })
     
    }
  }
  Slots.init({
    slot_time: DataTypes.STRING,
    slot_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Slots',
  });
  return Slots;
};