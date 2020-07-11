'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('payments', [
      {
        status: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('payments', [{}]);
  },
};
