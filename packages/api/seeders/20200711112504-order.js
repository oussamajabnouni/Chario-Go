'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('orders', [
      {
        deliveryTime: '13th April',
        amount: 249.7,
        date: new Date(),
        deliveryAddress: '1756  Roy Alley, GIRARDVILLE, Pennsylvania',
        subtotal: 200,
        discount: 0.0,
        deliveryFee: 49.7,
        payment_method: 'Postal Card',
        contact_number: '51085600',
        number_of_product: 3,
        description: 'menghir hrisa',

        status: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: 339.0,
        deliveryTime: '17th April',
        date: new Date(),
        deliveryAddress: '1756  Roy Alley, GIRARDVILLE, Pennsylvania',
        subtotal: 300.0,
        discount: 0.0,
        deliveryFee: 39.0,
        payment_method: 'Cash on delivery',
        contact_number: '51085600',
        number_of_product: 3,
        description: 'without sauces',
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('orders', [{}]);
  },
};
