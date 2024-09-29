'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('receipt_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      receipt_id: {
        type: Sequelize.INTEGER
      },
      product_id: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DECIMAL(10,2)
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('receipt_details');
  }
};