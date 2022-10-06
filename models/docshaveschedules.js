'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DocsHaveSchedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DocsHaveSchedules.belongsTo(models.User,{
        as:'user'
      })
      DocsHaveSchedules.belongsTo(models.Schedule,{
        as:'schedule'
      })
    }
  }
  DocsHaveSchedules.init({
    
  }, {
    sequelize,
    modelName: 'DocsHaveSchedules',
  });
  return DocsHaveSchedules;
};