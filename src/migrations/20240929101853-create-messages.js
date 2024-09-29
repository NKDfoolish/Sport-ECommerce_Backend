'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message_content: {
          type: Sequelize.TEXT('long')
      },
      sent_at: {
          type: Sequelize.DATE
      },
      user_id: {
          type: Sequelize.INTEGER
      },
      admin_id: {
          type: Sequelize.INTEGER
      },
      room_id: {
          type: Sequelize.INTEGER
      },
      status: {
          type: Sequelize.STRING
      },
      response: {
          type: Sequelize.TEXT
      },
      response_at: {
          type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('messages');
  }
};