'use strict';
const {
  Model
} = require('sequelize');
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
<<<<<<< HEAD
        this.belongsToMany(models.Product, { through: Coupon_Product });
=======
      // this.belongsToMany(Product, { through: Coupon_Product });
>>>>>>> e703e701aa1474fff2af5affe30ed588f0ab87e1
    }
  };
  Coupon.init({
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
  }, {
    sequelize,
    modelName: 'Coupon',
  });
  return Coupon;
};