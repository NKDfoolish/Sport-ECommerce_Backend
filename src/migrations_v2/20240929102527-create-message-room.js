'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('message_room', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    userOne_id: {
        type: Sequelize.INTEGER
    },
    userTwo_id: {
        type: Sequelize.INTEGER
    },
    added_at: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updated_at: {
        allowNull: false,
        type: Sequelize.DATE
    }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('message_room');
  }
};