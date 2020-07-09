'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Gategories', [
      {
        title: 'Fruits & Vegetables',
        type: 'grocery',
        icon: 'FruitsVegetable',
        slug: 'fruits-and-vegetables',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Meat & Fish',
        type: 'grocery',
        icon: 'MeatFish',
        slug: 'meat-and-fish',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Snacks',
        type: 'grocery',
        icon: 'Snacks',
        slug: 'snacks',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Gategories', [{
      first_name: 'John'
    }])
  }
};
