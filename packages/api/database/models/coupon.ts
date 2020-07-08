module.exports = (sequelize, DataTypes) => {
    const Coupon = sequelize.define('Coupon', {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        number_of_coupon: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        number_of_used_coupon: DataTypes.INTEGER,
        discount_in_percent: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
        category: {
          type: DataTypes.STRING,
          allowNull: false
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false
          },
        minimum_amount: {
            type: DataTypes.STRING,
            allowNull: false
          },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        expiration_date: DataTypes.DATE,
        description:DataTypes.STRING,
        creation_date: {
            type: DataTypes.DATE,
            allowNull: false
          },
      },
      {
        freezeTableName: true,
      }
    );
    Coupon.associate = (models) => {
        Coupon.hasMany(models.Product);
    };
  
    return Coupon;
  }