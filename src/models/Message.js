'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      Message.belongsTo(models.User, { foreignKey: 'user_id' });
      Message.belongsTo(models.MessageRoom, { foreignKey: 'room_id' });
    }
  };
  Message.init({
    message_id: { type: DataTypes.INTEGER, autoIncrement: true },
    room_id: { type: DataTypes.INTEGER, primaryKey: true },
    admin_id: { type: DataTypes.INTEGER},
    user_id: { type: DataTypes.INTEGER, primaryKey: true },
    message_content: DataTypes.TEXT,
    sent_at: DataTypes.DATE,
    status: DataTypes.ENUM('Unread', 'Read', 'Responded'),
    response: DataTypes.TEXT,
    response_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Message',
    timestamps: false,
  });

  return Message;
};
