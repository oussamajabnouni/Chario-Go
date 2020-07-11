'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orderproducts', [
      {
        id: 1,
        title: 'Garlic',
        image: 'http://s3.amazonaws.com/redqteam.com/headless-image/garlic.jpg',
        weight: '2lb',
        price: 140,
        quantity: 1,
        total: 140,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: 'Green Apple',
        image:
          'http://s3.amazonaws.com/redqteam.com/headless-image/Green_Apple.jpg',
        weight: '2lb',
        price: 139,
        quantity: 1,
        total: 139,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orderproducts', [{}]);
  },
};
