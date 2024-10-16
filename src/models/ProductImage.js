'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    static associate(models) {
      ProductImage.belongsTo(models.Product, { foreignKey: 'product_id' });
    }
  };
  ProductImage.init({
    image_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    product_id: DataTypes.INTEGER,
    image_url: DataTypes.STRING,
    is_primary: DataTypes.Boolean,
  }, {
    sequelize,
    modelName: 'ProductImage',
    timestamps: false,
  });
  return ProductImage;
};
