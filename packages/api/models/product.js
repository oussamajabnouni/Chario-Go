'use strict';
const {
  Model
} = require('sequelize');
const category = require('./category');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        this.belongsToMany(models.Category, { through: Category_Product });
        this.belongsToMany(models.Coupon, { through: Coupon_Product });
        this.hasMany(models.Gallery, {foreignKey: 'productId', as: 'gallery'})

    }
  };
  Product.init({
    slug: DataTypes.STRING,
    title: DataTypes.STRING,
    unit: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    salePrice: DataTypes.INTEGER,
    discountInPercent: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};