'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_address', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
          type: Sequelize.INTEGER
      },
      shipName: {
          type: Sequelize.STRING
      },
      shipAdress: {
          type: Sequelize.TEXT
      },
      shipEmail: {
          type: Sequelize.STRING
      },
      shipPhonenumber: {
          type: Sequelize.STRING
      },
      createdAt: {
          allowNull: false,
          type: Sequelize.DATE
      },
      updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_address');
  }
};