'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    static associate(models) {
      Supplier.hasMany(models.Receipt, { foreignKey: 'supplier_id' });
    }
  };
  Supplier.init({
    supplier_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    supplier_name: DataTypes.STRING,
    contact_person: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.TEXT,
    created_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Supplier',
    timestamps: false,
  });
  return Supplier;
};
