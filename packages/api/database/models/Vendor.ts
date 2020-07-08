module.exports = (sequelize, DataTypes) => {
    const Vendor = sequelize.define('Vendor', {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
          autoIncrement: true
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        categories: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        logoUrl : DataTypes.STRING,
        thumbnailUrl: {
          type: DataTypes.STRING,
          allowNull: false
        },
        previewUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        slogan : DataTypes.STRING,
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address : DataTypes.STRING,
        promotion: DataTypes.STRING,
        owners : DataTypes.ARRAY(DataTypes.STRING),
       
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
    Vendor.associate = (models) => {
        Vendor.hasMany(models.VendorProduct);
    };
  
    return Vendor;
  }