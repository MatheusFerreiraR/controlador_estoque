'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('services_order', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        employee_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'employees', Key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        client_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'clients', Key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        date:{
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date()
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false, 
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('services_order');
  }
};
