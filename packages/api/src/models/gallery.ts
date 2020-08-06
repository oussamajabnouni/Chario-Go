'use strict';
module.exports = (sequelize: any, DataTypes: any) => {
  const { Model } = require('sequelize');
  class Gallery extends Model {
  };
  Gallery.init({
    url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Gallery',
  });
  return Gallery;
};
