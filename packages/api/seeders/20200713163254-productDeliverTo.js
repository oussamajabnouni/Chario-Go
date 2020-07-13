'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProductDeliverTo', [
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
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ProductDeliverTo', [{
    }])
  }
};
