'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Address, {foreignKey: 'userId', as: 'addresses'});
      this.hasMany(models.Card, {foreignKey: 'userId', as: 'cards'});
      this.hasMany(models.Contact, {foreignKey: 'userId', as: 'contacts'});
      this.hasMany(models.Order, {foreignKey: 'userId', as: 'orders'});

    }
  };
  User.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    email: DataTypes.STRING,
    image: DataTypes.STRING,
    password: DataTypes.STRING,
    creation_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};