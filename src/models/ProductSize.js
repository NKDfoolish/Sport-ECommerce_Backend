'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductSize extends Model {
    static associate(models) {
      ProductSize.belongsTo(models.Product, { foreignKey: 'product_id' });
    }
  };
  ProductSize.init({
    product_size_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_id: DataTypes.INTEGER,
    size: DataTypes.ENUM('S','M','L'),
    stock: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ProductSize',
    timestamps: false,
  });
  return ProductSize;
};
