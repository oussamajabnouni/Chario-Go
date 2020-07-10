'use strict';
const {
  Model
} = require('sequelize');
const { threadId } = require('worker_threads');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.OrderProduct, {
        foreignKey: 'orderId',
        as: 'products',
      });
    }
  }
  Order.init(
    {
      userId: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
      deliveryTime: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      subtotal: DataTypes.INTEGER,
      number_of_product: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      deliveryFee: DataTypes.INTEGER,
      deliveryAddress: DataTypes.STRING,
      payment_method: DataTypes.STRING,
      contact_number: DataTypes.STRING,
      description: DataTypes.STRING,
      date: DataTypes.DATE,
      creation_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Order',
    }
  );
  return Order;
};
