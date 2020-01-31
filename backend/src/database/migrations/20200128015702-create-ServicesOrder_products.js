'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('servicesOrder_products', { 
        id:{
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        product_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'products', Key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        service_order_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {model: 'services_order', Key: 'id'},
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        quantity:{
          type: Sequelize.INTEGER,
          // allowNUll: false,
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
      return queryInterface.dropTable('servicesOrder_products');
  }
};
