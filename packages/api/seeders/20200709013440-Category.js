"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          id: 1,
          title: "Fruits & Vegetables",
          type: "grocery",
          icon: "FruitsVegetable",
          slug: "fruits-and-vegetables",
          createdAt: new Date(),
          updatedAt: new Date(),
          parentId: null,
        },
        {
          id: 2,
          title: "Meat & Fish",
          type: "grocery",
          icon: "MeatFish",
          slug: "meat-and-fish",
          createdAt: new Date(),
          updatedAt: new Date(),
          parentId: 1,
        },
        {
          id: 3,
          title: "Snacks",
          type: "grocery",
          icon: "Snacks",
          slug: "snacks",
          createdAt: new Date(),
          updatedAt: new Date(),
          parentId: 1,
        },

        {
          id: 4,
          title: "Bread & Bakery",
          slug: "Bread & Bakery",
          icon: "FruitsVegetable",
          type: "grocery",

          createdAt: new Date(),
          updatedAt: new Date(),
          parentId: null,
        },

        {
          id: 5,
          title: "Breakfast ",
          slug: "Breakfast ",
          icon: "FruitsVegetable",
          type: "grocery",

          createdAt: new Date(),
          updatedAt: new Date(),
          parentId: null,
        },

        {
          id: 6,
          title: "Cookies",
          slug: "Cookies",
          icon: "FruitsVegetable",
          type: "grocery",

          createdAt: new Date(),
          updatedAt: new Date(),
          parentId: null,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", [{}]);
  },
};
