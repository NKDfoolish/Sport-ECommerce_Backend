'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DeliveryType extends Model {
    static associate(models) {
      DeliveryType.hasMany(models.Order, { foreignKey: 'delivery_type_id' });
    }
  };
  DeliveryType.init({
    delivery_type_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    delivery_name: DataTypes.STRING,
    cost: DataTypes.DECIMAL(10, 2),
    estimated_days: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'DeliveryType',
    timestamps: false,
  });
  return DeliveryType;
};
