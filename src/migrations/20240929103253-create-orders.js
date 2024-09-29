'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      order_date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      shipping_address: {
        type: Sequelize.TEXT
      },
      payment_status: {
        type: Sequelize.STRING
      },
      payment_method: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orders');
  }
};