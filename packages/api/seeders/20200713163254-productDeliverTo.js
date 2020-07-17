"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ProductDeliverTo",
      [
        {
          AddressId: 2,
          productId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 1,
          productId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 1,
          productId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 2,
          productId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 1,
          productId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 1,
          productId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 1,
          productId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 1,
          productId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 1,
          productId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 1,
          productId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 2,
          productId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 2,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 2,
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 2,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 2,
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 1,
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 2,
          productId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 1,
          productId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 2,
          productId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 1,
          productId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 1,
          productId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          AddressId: 2,
          productId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ProductDeliverTo", [{}]);
  },
};
