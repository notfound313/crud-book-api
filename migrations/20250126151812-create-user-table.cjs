'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      fullname: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      published_year: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique:true
      },})   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
