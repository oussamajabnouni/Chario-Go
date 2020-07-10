'use strict';
const { Model } = require('sequelize');
const category = require('./category');
module.exports = (sequelize, DataTypes) => {
  class VendorProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Category, { through: Category_VendorProduct });
      this.belongsToMany(models.Coupon, { through: Coupon_VendorProduct });
    }
  }
  VendorProduct.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
      categories: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'VendorProduct',
    }
  );
  return VendorProduct;
};
