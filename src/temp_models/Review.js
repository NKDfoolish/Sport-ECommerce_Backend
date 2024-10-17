'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.User, { foreignKey: 'user_id' });
      Review.belongsTo(models.Product, { foreignKey: 'product_id' });
    }
  };
  Review.init({
    review_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
    review_text: DataTypes.TEXT,
    created_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Review',
    timestamps: false,
  });
  return Review;
};
