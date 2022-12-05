const PostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      // references:{
      //     model:'blog_posts',
      //     key: 'id',
      //   }
    },
    categoryId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      // references:{
      //     model:'categories',
      //     key: 'id',
      //   }
    },
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
      through:PostCategory,
    })
    Category.belongsToMany(BlogPost,{
      foreingKey:'post_id',
      otherKey:'category_id',
      through:PostCategory,
    })
  };

  return PostCategory;
};

module.exports = PostCategoryModel;