module.exports = (sequelize, DataTypes) => {
    const VendorProduct = sequelize.define('VendorProduct', {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categories: DataTypes.STRING,
        description: DataTypes.STRING,
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
          },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
          },
      },
      {
        freezeTableName: true,
      }
    );
    VendorProduct.associate = (models) => {
        VendorProduct.hasMany(models.Category);
    };
  
    return VendorProduct;
  }