'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('contacts', [
      {
        type: 'primary',
        number: '51085600',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'secondary',
        number: '50967810',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('contacts', [{}]);
  },
};
