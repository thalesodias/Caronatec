'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Caronas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cidade: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.STRING
      },
      partida: {
        type: Sequelize.STRING
      },
      chegada: {
        type: Sequelize.STRING
      },
      tolerancia: {
        type: Sequelize.STRING
      },
      local_encontro: {
        type: Sequelize.STRING
      },
      vagas: {
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      ativa: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'users',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
      },
      veihicleId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'vehicles',
          key:'id'
        },
        onUpdate:'cascade',
        onDelete:'cascade'
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
    await queryInterface.dropTable('Caronas');
  }
};