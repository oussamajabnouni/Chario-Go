'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [
      {
        name: "ADMIN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "CLIENT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "VENDOR",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', [{}]);
  },
};
