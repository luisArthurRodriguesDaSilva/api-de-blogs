'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
    
      postId:{
        type: Sequelize.INTEGER,
           allowNull: false,
           primaryKey: true,
        // references:{
        //     model:'blog_posts',
        //     key: 'id',
        //   }
    },
    
    categoryId:{
      type: Sequelize.INTEGER,
           allowNull: false,
           primaryKey: true,
      references:{
        model:'categories',
        key: 'id',
      }
    },
    });
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
