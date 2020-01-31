'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('employee_tools', { 
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
        tool_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'tools', Key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        rental_date:{
          type: Sequelize.DATE,
          defaultValue: new Date()
        },
        return_date:{
          type: Sequelize.DATE,
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
      return queryInterface.dropTable('employee_tools');
  }
};
