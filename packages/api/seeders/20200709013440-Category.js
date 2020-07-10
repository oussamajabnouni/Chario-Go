'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        id: 1,
        title: 'Fruits & Vegetables',
        type: 'grocery',
        icon: 'FruitsVegetable',
        slug: 'fruits-and-vegetables',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
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
    return queryInterface.bulkDelete('Categories', [{
      first_name: 'John'
    }])
  }
};
