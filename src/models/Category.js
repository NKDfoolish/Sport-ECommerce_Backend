'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.hasMany(models.Product, { foreignKey: 'category_id' });
    }
  };
  Category.init({
    category_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    category_name: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Category',
    timestamps: false,
  });
  return Category;
};
