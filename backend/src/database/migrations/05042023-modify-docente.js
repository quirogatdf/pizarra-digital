'use strict'

const {query} = require('express');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'Docentes',
        'email',{
          type: Sequelize.STRING(100),
          allowNull: true
        }
        ),
        queryInterface.addColumn(
          'Docentes',
          'telefono',{
            type: Sequelize.STRING(25),
            allowNull: true
          }
        )
    ])
    
  },
  down: async (queryInterface, Sequelize) => {

  }
}