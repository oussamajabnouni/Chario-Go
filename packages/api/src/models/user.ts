'use strict';
module.exports = (sequelize: any, DataTypes: any) => {
  const { Model } = require('sequelize');
  class User extends Model {
    static associate(models: any) {
      this.hasMany(models.Address, { foreignKey: 'userId', as: 'addresses' });
      this.hasMany(models.Card, { foreignKey: 'userId', as: 'cards' });
      this.hasMany(models.Contact, { foreignKey: 'userId', as: 'contacts' });
      this.hasMany(models.Order, { foreignKey: 'userId', as: 'orders' });
      this.belongsTo(models.Role, { foreignKey: 'roleId', as: 'role' });
    }
  };
  User.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    creation_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
