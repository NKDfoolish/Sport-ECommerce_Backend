'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      Brand.hasMany(models.Product, { foreignKey: 'brand_id' });
    }
  };
  Brand.init({
    brand_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    brand_name: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Brand',
    timestamps: false,
  });
  return Brand;
};
