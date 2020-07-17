"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ProductCategory",
      [
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
          categoryId: 1,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          productId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          productId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          productId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          productId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          productId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          productId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 2,
          productId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 3,
          productId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          categoryId: 1,
          productId: 15,
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
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ProductCategory", [{}]);
  },
};
