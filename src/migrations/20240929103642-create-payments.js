'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_id: {
        type: Sequelize.INTEGER
      },
      payment_date: {
        type: Sequelize.DATE
      },
      transaction_id: {
        type: Sequelize.STRING
      },
      payment_method: {
        type: Sequelize.STRING
      },
      payment_gateway: {
        type: Sequelize.STRING
      },
      payment_status: {
        type: Sequelize.STRING
      },
      payment_details: {
        type: Sequelize.TEXT
      },
      amount: {
        type: Sequelize.DECIMAL(10,2)
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('payments');
  }
};