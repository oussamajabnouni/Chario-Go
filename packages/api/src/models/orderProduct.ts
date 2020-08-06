'use strict';
module.exports = (sequelize: any, DataTypes: any) => {
  const {
    Model
  } = require('sequelize');
  class OrderProduct extends Model {
  };
  OrderProduct.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    weight: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'OrderProduct',
  });
  return OrderProduct;
};