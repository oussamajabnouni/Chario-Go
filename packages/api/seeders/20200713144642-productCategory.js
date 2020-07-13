'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductCategory', [
      {
        categoryId: 1,
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 1,
        productId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2,
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3,
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductCategory', [{
    }])
  }
};
