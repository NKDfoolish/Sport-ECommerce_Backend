'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ReceiptDetail extends Model {
    static associate(models) {
      ReceiptDetail.belongsTo(models.Receipt, { foreignKey: 'receipt_id' });
      ReceiptDetail.belongsTo(models.Product, { foreignKey: 'product_id' });
    }
  };
  ReceiptDetail.init({
    receipt_detail_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    receipt_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(10, 2),
  }, {
    sequelize,
    modelName: 'ReceiptDetail',
    timestamps: false,
  });
  return ReceiptDetail;
};
