'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Brand, { foreignKey: 'brand_id' });
      Product.belongsTo(models.Category, { foreignKey: 'category_id' });
      Product.hasMany(models.OrderItem, { foreignKey: 'product_id' });
      Product.hasMany(models.Review, { foreignKey: 'product_id' });
      Product.hasMany(models.ProductImage, { foreignKey: 'product_id' });
      Product.hasMany(models.ProductSize, { foreignKey: 'product_id' });
    }
  };
  Product.init({
    product_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    category_id: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(10, 2),
    color: DataTypes.STRING,
    stock: { type: DataTypes.INTEGER, defaultValue: 0 },
    created_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
    timestamps: false,
  });
  return Product;
};
