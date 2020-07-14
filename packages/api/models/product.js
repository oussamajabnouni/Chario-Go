'use strict';
const { Model } = require('sequelize');
// const category = require('./category');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Category, {
        through: 'ProductCategory',
        as: 'categories',
        foreignKey: 'productId',
      });
      this.belongsToMany(models.Address, {
        through: 'ProductDeliverTo',
        as: 'deliverTo',
        foreignKey: 'productId',
      });
      this.belongsToMany(models.Coupon, {
        through: 'ProductCoupon',
        as: 'coupons',
        foreignKey: 'productId',
      });
      this.hasMany(models.Gallery, { foreignKey: 'productId', as: 'gallery' });
    }
  }
  Product.init(
    {
      slug: DataTypes.STRING,
      title: DataTypes.STRING,
      unit: DataTypes.STRING,
      type: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.INTEGER,
      salePrice: DataTypes.INTEGER,
      discountInPercent: DataTypes.INTEGER,
      per_unit: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Product',
    }
  );
  return Product;
};
