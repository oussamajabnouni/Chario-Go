'use strict';
module.exports = (sequelize: any, DataTypes: any) => {
  const { Model } = require('sequelize');
  class Contact extends Model {
  }
  Contact.init(
    {
      type: DataTypes.STRING,
      number: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Contact',
    }
  );
  return Contact;
};
