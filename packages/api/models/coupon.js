'use strict';
const { Model } = require('sequelize');
const Product = require('./product');

module.exports = (sequelize, DataTypes) => {
  class Coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
      code: DataTypes.INTEGER,
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
