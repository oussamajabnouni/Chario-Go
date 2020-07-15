'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('VendorProduct', [
      {
        ProductId: 8,
        vendorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductId: 9,
        vendorId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductId: 8,
        vendorId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('VendorProduct', [{}]);
  },
};
