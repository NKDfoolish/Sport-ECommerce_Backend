'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserAddress extends Model {
    static associate(models) {
      UserAddress.belongsTo(models.User, { foreignKey: 'user_id' });
    }
  };
  UserAddress.init({
    address_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.INTEGER,
    ship_name: DataTypes.STRING,
    ship_address: DataTypes.TEXT,
    ship_email: DataTypes.STRING,
    ship_phone_number: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'UserAddress',
    timestamps: false,
  });
  return UserAddress;
};
