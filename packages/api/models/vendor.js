'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Product, {
        through: 'VendorProduct',
        as: 'products',
        foreignKey: 'vendorId'
      });
      this.hasMany(models.User, { foreignKey: 'vendorId', as: 'owners' })
    }
  };
  Vendor.init({
    slug: DataTypes.STRING,
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    logoUrl: DataTypes.STRING,
    thumbnailUrl: DataTypes.STRING,
    previewUrl: DataTypes.STRING,
    slogan: DataTypes.STRING,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    promotion: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Vendor',
  });
  return Vendor;
};
