'use strict';
module.exports = (sequelize: any, DataTypes: any) => {
  const { Model } = require('sequelize');
  class Category extends Model {
    static associate(models: any) {
      this.hasMany(models.Category, { foreignKey: 'parentId', as: 'children' })
    }
  }
  Category.init(
    {
      title: DataTypes.STRING,
      type: DataTypes.STRING,
      icon: DataTypes.STRING,
      slug: DataTypes.STRING,
      number_of_product: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Category',
    }
  );

  return Category;
};
