'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('addresses', [
      {
        info: 'Rue yasser arafet',
        state: 'Tunis',
        city: 'Lac',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        info: 'beb bhar',
        state: 'Sousse',
        city: 'Sahloul',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('addresses', [{}]);
  },
};
