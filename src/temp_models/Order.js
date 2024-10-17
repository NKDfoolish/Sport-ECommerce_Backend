'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      Order.belongsTo(models.User, { foreignKey: 'user_id' });
      Order.hasMany(models.OrderItem, { foreignKey: 'order_id' });
      Order.belongsTo(models.DeliveryType, { foreignKey: 'delivery_type_id' });
      Order.hasOne(models.Payment, { foreignKey: 'order_id' });
    }
  };
  Order.init({
    order_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.INTEGER,
    order_date: DataTypes.DATE,
    status: DataTypes.ENUM('Pending', 'Delivered'),
    shipping_address: DataTypes.TEXT,
    payment_status: DataTypes.ENUM('Pending', 'Failed'),
    payment_method: DataTypes.STRING,
    total_price: DataTypes.DECIMAL(10, 2),
    delivery_type_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
    timestamps: false,
  });
  return Order;
};
