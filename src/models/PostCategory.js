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
       foreignKey:'postId',
      otherKey:'categoryId',
      through:PostCategory,
    });
    Category.belongsToMany(BlogPost,{
      as:'blog_posts',
       foreignKey:'categoryId',
      otherKey:'postId',
      through:PostCategory,
    })
  };

  return PostCategory;
};

module.exports = PostCategoryModel;