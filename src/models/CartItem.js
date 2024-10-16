'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CartItem extends Model {
    static associate(models) {
      CartItem.belongsTo(models.User, { foreignKey: 'user_id' });
      CartItem.belongsTo(models.Product, { foreignKey: 'product_id' });
    }
  };
  CartItem.init({
    cart_item_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    session_id: DataTypes.STRING,
    added_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'CartItem',
    timestamps: false,
  });
  return CartItem;
};
