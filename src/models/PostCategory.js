const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId:DataTypes.INTEGER,
    categoryId:DataTypes.INTEGER,
  },
  {
    sequelize,
    underscored:true,
    timestamps: false,
    tableName:'posts_categories',
  }
  );
  PostCategory.associate = ({Category,BlogPost}) => {
    BlogPost.belongsToMany(Category,{
      as:'categories',
      foreingKey:'postId',
      otherKey:'categoryId',
      through:PostCategory,
    });
    Category.belongsToMany(BlogPost,{
      as:'blog_posts',
      foreingKey:'categoryId',
      otherKey:'postId',
      through:PostCategory,
    })
  };

  return PostCategory;
};

module.exports = PostCategoryModel;