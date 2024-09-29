'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('delivery_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      delivery_name: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.DECIMAL(10,2)
      },
      estimated_days: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('delivery_types');
  }
};