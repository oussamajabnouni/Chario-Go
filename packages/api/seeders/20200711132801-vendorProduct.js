'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('vendorproducts', [
      {
        categories: 'Burgers',
        type: 'Burgers',
        name: 'Classic Cheese Burger',
        description:
          'Prepared with a patty, a slice of cheese and special sauce',
        price: 5.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categories: 'Sandwich',
        type: 'Sandwich',

        name: 'Classic Cheese Sandwich',
        description:
          'Prepared with a patty, a slice of cheese and special sauce',
        price: 5.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categories: 'Sandwich',
        type: 'Sandwich',

        name: 'Grilled Chicken Sub',
        description:
          'Prepared with grilled chicken patty, salad and house signature sauce',
        price: 6.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categories: 'Chicken',
        type: 'Chicken',

        name: 'Jerk Chicken',
        description:
          'Chicken prepared wth spices and slow-cooked over a fire or grill',
        price: 10.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('vendorproducts', [{}]);
  },
};
