'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('receipts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      supplier_id: {
        type: Sequelize.INTEGER
      },
      receipt_date: {
        type: Sequelize.DATE
      },
      total_amount: {
        type: Sequelize.DECIMAL(10,2)
      },
      status: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('receipts');
  }
};