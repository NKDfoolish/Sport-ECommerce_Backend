'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('brands', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      brand_name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('brands');
  }
};