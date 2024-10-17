'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.CartItem, { foreignKey: 'user_id' });
      User.hasMany(models.Order, { foreignKey: 'user_id' });
      User.hasMany(models.Review, { foreignKey: 'user_id' });
      User.hasMany(models.Message, { foreignKey: 'user_id' });
      User.hasMany(models.UserAddress, { foreignKey: 'user_id' });
    }
  };
  User.init({
    user_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    full_name: DataTypes.STRING,
    address: DataTypes.TEXT,
    gender: DataTypes.ENUM('male', 'female'),
    phone_number: DataTypes.STRING,
    created_at: DataTypes.DATE,
    role: DataTypes.ENUM('customer', 'admin'),
    is_admin: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false,
  });
  return User;
};
