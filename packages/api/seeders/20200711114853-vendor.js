'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('vendors', [
      {
        name: 'Alo-monreal',
        slug: 'Alo Monreal',
        previewUrl:
          'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/bristo.jpg',
        thumbnailUrl:
          'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/bristo_thumb.jpg',

        type: 'restaurant',

        logoUrl:
          'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/bristo_thumb.jpg',

        slogan: 'Restaurant',
        description: 'we provide best Burger',
        address: 'Sahloul, Sousse',
        promotion: '10%',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mix Max',
        slug: 'Mix Max',
        previewUrl:
          'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/bristo.jpg',
        thumbnailUrl:
          'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/bristo_thumb.jpg',

        type: 'restaurant',

        logoUrl:
          'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/bristo_thumb.jpg',

        slogan: 'Restaurant',
        description: 'we provide best Burger',
        address: 'Sahloul, Sousse',
        promotion: '0%',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Planet Food',
        slug: 'Planet Food',
        previewUrl:
          'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/bristo.jpg',
        thumbnailUrl:
          'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/bristo_thumb.jpg',

        type: 'restaurant',

        logoUrl:
          'https://s3.amazonaws.com/redqteam.com/pickbazar/Food/bristo_thumb.jpg',

        slogan: 'Restaurant',
        description: 'we provide best Burger',
        address: 'Sahloul, Sousse',
        promotion: '15%',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('vendors', [{}]);
  },
};
