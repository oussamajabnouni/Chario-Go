module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: DataTypes.STRING,
        unit: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
          type: DataTypes.STRING,
          allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        salePrice: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        discountInPercent: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        number_of_product: DataTypes.INTEGER,
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
          },
      },
      {
        freezeTableName: true,
      }
    );
    Product.associate = (models) => {
        Product.hasMany(models.Category);
    };
  
    return Product;
  }