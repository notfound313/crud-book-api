'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('authentication', {
      token: {
          type: Sequelize.STRING(255),
          allowNull: false,
          unique:true,
        },})
        
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('authentication')
  }
};
