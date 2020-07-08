'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        this.hasMany(models.Category, {foreignKey: 'category', as: 'children'})
        this.belongsToMany(Product, { through: Category_Product });
        this.belongsToMany(Product, { through: Category_VendorProduct });
        this.belongsToMany(VendorProduct, { through: Category_VendorProduct });


    }
  };
  Category.init({
    name: DataTypes.STRING,
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    icon: DataTypes.STRING,
    slug: DataTypes.STRING,
    number_of_product: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};