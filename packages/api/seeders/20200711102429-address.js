'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('addresses', [
      {
        type: 'grocery',

        info: 'Rue yasser arafet',
        state: 'Tunis',
        city: 'Lac',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        type: 'grocery',

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
