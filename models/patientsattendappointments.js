'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PatientsAttendAppointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PatientsAttendAppointments.belongsTo(models.Appointment, {
        as: 'appointment',
        foreignKey: 'appId',
        onDelete:"cascade",
        onUpdate:"cascade"
      })

      PatientsAttendAppointments.belongsTo(models.User,{
        as:'user'
      })
    }
  }
  PatientsAttendAppointments.init({
    concerns : DataTypes.STRING,
symptoms: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PatientsAttendAppointments',
  });
  return PatientsAttendAppointments;
};