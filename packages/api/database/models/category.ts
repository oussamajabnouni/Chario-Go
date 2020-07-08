module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type: DataTypes.STRING,
        icon: {
            type: DataTypes.STRING,
            allowNull: false
        },
        slug: {
          type: DataTypes.STRING,
          allowNull: false
        },
        number_of_product: DataTypes.INTEGER,
        creation_date: {
            type: DataTypes.DATE,
            allowNull: false
          },
      },
      {
        freezeTableName: true,
      }
    );
    Category.associate = (models) => {
        Category.hasMany(models.Category);
    };
    Category.associate = (models) => {
        Category.hasMany(models.Product);
      };
  
    return Category;
  }