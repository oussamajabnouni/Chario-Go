'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('galleries', [
      {
        productId: 8,
        url:
          'https://res.cloudinary.com/redq-inc/image/upload/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg',
        url:
          'https://res.cloudinary.com/redq-inc/image/upload/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg',
        url:
          'https://res.cloudinary.com/redq-inc/image/upload/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg',

        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        productId: 9,
        url:
          'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg',
        url:
          'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg',
        url:
          'https://res.cloudinary.com/redq-inc/image/upload/v1589614569/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg',

        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('galleries', [{}]);
  },
};
