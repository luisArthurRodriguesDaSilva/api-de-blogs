'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('post_categories', {
    
      post_id:{
           allowNull: false,
           primaryKey: true,
           type: Sequelize.INTEGER
    },
    
    category_id:{
           allowNull: false,
           primaryKey: true,
           type: Sequelize.INTEGER
    },
    });
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('post_categories');
  }
};
