'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.Order, { foreignKey: 'order_id' });
    }
  };
  Payment.init({
    payment_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    order_id: DataTypes.INTEGER,
    payment_date: DataTypes.DATE,
    transaction_id: DataTypes.STRING,
    payment_method: DataTypes.STRING,
    payment_gateway: DataTypes.STRING,
    payment_status: DataTypes.ENUM('Success', 'Failed'),
    payment_details: DataTypes.TEXT,
    amount: DataTypes.DECIMAL(10, 2),
  }, {
    sequelize,
    modelName: 'Payment',
    timestamps: false,
  });
  return Payment;
};
