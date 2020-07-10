'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Category, { foreignKey: 'parentId', as: 'children' })
      //this.belongsToMany(models.Product, { through: Category_Product });
      this.belongsToMany(models.Product, {
        through: 'ProductCategory',
        as: 'products',
        foreignKey: 'categoryId'
      });
      this.belongsToMany(models.Product, {
        through: 'vendorProductCategory',
        as: 'vendorProducts',
        foreignKey: 'categoryId'
      });
      /*this.belongsToMany(models.Product, { through: Category_VendorProduct });
      this.belongsToMany(models.VendorProduct, { through: Category_VendorProduct });*/


    }
  );

  return Category;
};
