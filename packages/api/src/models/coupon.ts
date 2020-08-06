'use strict';
const Product = require('./product');

module.exports = (sequelize: any, DataTypes: any) => {
  const { Model } = require('sequelize');
  class Coupon extends Model {
    static associate(models: any) {
      this.belongsToMany(models.Product, {
        through: 'ProductCoupon',
        as: 'products',
        foreignKey: 'couponId'
      });

    }
  }
  Coupon.init(
    {
      title: DataTypes.STRING,
      number_of_coupon: DataTypes.INTEGER,
      number_of_used_coupon: DataTypes.INTEGER,
      discount_in_percent: DataTypes.INTEGER,
      category: DataTypes.STRING,
      code: DataTypes.STRING,
      minimum_amount: DataTypes.STRING,
      status: DataTypes.STRING,
      expiration_date: DataTypes.DATE,
      description: DataTypes.STRING,
      creation_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Coupon',
    }
  );
  return Coupon;
};
