'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
<<<<<<< HEAD
      this.belongsToMany(models.Category, { through: OrderProduct_Category });
=======
      // this.belongsToMany(Category, { through: OrderProduct_Category });
>>>>>>> e703e701aa1474fff2af5affe30ed588f0ab87e1
    }
  };
  OrderProduct.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.INTEGER,
    weight: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'OrderProduct',
  });
  return OrderProduct;
};