'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Coupons', [
      {
        title: 'Free Delivery',

        code: '15',
        discount_in_percent: 15,
        number_of_coupon: 20,
        number_of_used_coupon: 10,

        status: 'active',
        expiration_date: new Date(),
        creation_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Free Delivery',

        code: '20',
        discount_in_percent: 20,
        number_of_coupon: 20,
        number_of_used_coupon: 10,

        status: 'revoked',
        expiration_date: new Date(),
        creation_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'cyber Monday Sale',
        code: '10',

        discount_in_percent: 10,
        number_of_coupon: 20,
        number_of_used_coupon: 10,

        status: 'active',
        expiration_date: new Date(),
        creation_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Boxing Day Sale',
        code: '33',

        discount_in_percent: 10,
        number_of_coupon: 10,
        number_of_used_coupon: 5,

        status: 'active',
        expiration_date: new Date(),
        creation_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        title: 'Summer Discount',
        code: '333',

        discount_in_percent: 10,
        number_of_coupon: 10,
        number_of_used_coupon: 5,

        status: 'active',
        expiration_date: new Date(),
        creation_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Coupons', [{}]);
  },
};
