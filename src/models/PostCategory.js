const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    categoryId:DataTypes.INTEGER,
    postId:DataTypes.INTEGER,
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
      foreingKey:'post_id',
      otherKey:'category_id',
      through:PostCategory,
    })
    Category.belongsToMany(BlogPost,{
      foreingKey:'category_id',
      otherKey:'post_id',
      through:PostCategory,
    })
  };

  return PostCategory;
};

module.exports = PostCategoryModel;