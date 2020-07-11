'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Products',
      [
        {
          id: 8,
          title: 'lime',
          slug: 'lime',
          unit: '12 pc(s)',
          price: 1.5,
          salePrice: 0,
          discountInPercent: 0,
          description:
            'The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.',
          type: 'grocery',
          image:
            'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg',

          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          id: 9,
          title: 'Lemon',
          slug: 'lemon',
          unit: '12 pc(s)',
          price: 1.5,
          salePrice: 0,
          discountInPercent: 0,
          description:
            'The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.',
          type: 'grocery',
          image:
            'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', [{}]);
  },
};
