'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [
      {
        id: 1,
        name: "ADMIN",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: "CLIENT",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
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
