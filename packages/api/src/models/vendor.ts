'use strict';
module.exports = (sequelize: any, DataTypes: any) => {
  const { Model } = require('sequelize');
  class Vendor extends Model {
    static associate(models: any) {
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
