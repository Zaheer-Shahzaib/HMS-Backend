"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.belongsTo(models.User, {
        as: "User",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Schedule.init(
    {
      startTime: DataTypes.TIME,
      endTime: DataTypes.TIME,
      breakTime: DataTypes.TIME,
      days:{
      type:DataTypes.STRING,
      get() {
        return this.getDataValue('days').split(';')
        },
        set(val){
        this.setDataValue('days',val.join(';'))
        }
      }
      
    },
    {
      sequelize,
      modelName: "Schedule",
    }
  );
  return Schedule;
};
