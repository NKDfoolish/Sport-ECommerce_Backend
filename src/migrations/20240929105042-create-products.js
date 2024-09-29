'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      brand_id: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DECIMAL(10,2)
      },
      product_size_id: {
        type: Sequelize.INTEGER
      },
      color: {
        type: Sequelize.STRING
      },
      stock: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      product_images_id: {
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products');
  }
};