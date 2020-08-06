'use strict';
module.exports = (sequelize: any, DataTypes: any) => {
  const { Model } = require('sequelize');
  class Card extends Model {
  }
  Card.init(
    {
      type: DataTypes.STRING,
      name: DataTypes.STRING,
      cardType: DataTypes.STRING,
      lastFourDigit: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Card',
    }
  );
  return Card;
};
