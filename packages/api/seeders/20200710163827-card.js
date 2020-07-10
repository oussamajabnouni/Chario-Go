'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('cards', [
      {
        type: 'primary',
        cardType: 'Postal Card',
        name: 'Mongi Berrima',
        lastFourDigit: 2349,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'secondary',
        cardType: 'Master Card',
        name: 'Mongi Berrima',
        lastFourDigit: 8724,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'secondary',
        cardType: 'visa',
        name: 'Mongi Berrima',
        lastFourDigit: 4535,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'secondary',
        cardType: 'visa',
        name: 'Mongi Berrima',
        lastFourDigit: 4585,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cards', [{}]);
  },
};
