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
      foreingKey:'postId',
      otherKey:'categoryId',
      as:'categories',
      through:PostCategory,
    })
    Category.belongsToMany(BlogPost,{
      otherKey:'postId',
      foreingKey:'categoryId',
      as:'posts',
      through:PostCategory,
    })
  };

  return PostCategory;
};

module.exports = PostCategoryModel;