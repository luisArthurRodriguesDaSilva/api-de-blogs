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
      foreingKey:'category_id',
      otherKey:'post_id',
      as:'categories',
      through:PostCategory,
    })
    Category.belongsToMany(BlogPost,{
      otherKey:'category_id',
      foreingKey:'post_id',
      as:'posts',
      through:PostCategory,
    })
    // PostCategory.belongsTo(BlogPost,{
    //   foreingKey:'post_id',
    //   as:'post_categories'
    // });
  };

  return PostCategory;
};

module.exports = PostCategoryModel;