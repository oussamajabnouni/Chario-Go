'use strict';

module.exports = (sequelize: any, DataTypes: any) => {
  const { Model } = require('sequelize');
  class Address extends Model {
  };
  Address.init({
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    info: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};
