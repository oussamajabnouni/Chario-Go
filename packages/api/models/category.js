'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Gategory.init({
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    icon: DataTypes.STRING,
    slug: DataTypes.STRING,
    number_of_product: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Gategory',
  });
  return Gategory;
};