'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MessageRoom extends Model {
    static associate(models) {
      MessageRoom.hasMany(models.Message, { foreignKey: 'room_id' });
    }
  };
  MessageRoom.init({
    room_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userOne_id: DataTypes.INTEGER,
    userTwo_id: DataTypes.INTEGER,
    added_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'MessageRoom',
    timestamps: false,
  });
  return MessageRoom;
};
