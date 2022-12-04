const BlogPostModel = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      },
    title: DataTypes.STRING,
    content:  DataTypes.STRING,
    userId:  DataTypes.INTEGER,
    published:  DataTypes.DATE,
    updated:  DataTypes.DATE,
  },
  {
    sequelize,
    underscored:true,
    timestamps: false,
    tableName:'blog_posts',
  }
  );

  BlogPost.associate = ({User}) => {
    BlogPost.belongsTo(User,
     { foreignKey: 'user_id' });
 };

  return BlogPost;
};

module.exports = BlogPostModel;