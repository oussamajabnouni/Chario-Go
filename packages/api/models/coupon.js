'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coupon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        this.hasMany(models.Product, {foreignKey: 'products', as: 'Product'})
    }
  };
  Coupon.init({
    title: DataTypes.STRING,
    number_of_coupon: DataTypes.INTEGE,
    number_of_used_coupon: DataTypes.INTEGE,
    discount_in_percent: DataTypes.INTEGE,
    category: DataTypes.STRING,
    code: DataTypes.INTEGER,
    minimum_amount: DataTypes.STRING,
    status: DataTypes.STRING,
    expiration_date: DataTypes.DATE,
    description: DataTypes.STRING,
    creation_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Coupon',
  });
  return Coupon;
};