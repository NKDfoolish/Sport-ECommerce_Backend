'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Receipt extends Model {
    static associate(models) {
      Receipt.belongsTo(models.Supplier, { foreignKey: 'supplier_id' });
      Receipt.hasMany(models.ReceiptDetail, { foreignKey: 'receipt_id' });
    }
  };
  Receipt.init({
    receipt_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    supplier_id: DataTypes.INTEGER,
    receipt_date: DataTypes.DATE,
    total_amount: DataTypes.DECIMAL(10, 2),
    status: DataTypes.ENUM('Pending', 'Completed'),
    created_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Receipt',
    timestamps: false,
  });
  return Receipt;
};
