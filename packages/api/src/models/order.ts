'use strict';
module.exports = (sequelize: any, DataTypes: any) => {
  const { Model } = require('sequelize');
  class Order extends Model {
    static associate(models: any) {
      this.hasMany(models.OrderProduct, {
        foreignKey: 'orderId',
        as: 'products',
      });
    }
  }
  Order.init(
    {
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
