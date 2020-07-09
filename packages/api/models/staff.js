'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Staff extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  Staff.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    contact_number: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    name: DataTypes.STRING,
    creation_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Staff',
  });
  return Staff;
};