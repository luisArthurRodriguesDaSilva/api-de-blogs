// src/models/user.model.js

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      },
    displayName:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    image:DataTypes.STRING,
  },
  {
    sequelize,
    underscored:true,
    timestamps: false,
    tableName:'users',
  }
  );

  User.associate = ({BlogPost}) => {
    User.hasMany(BlogPost,
      {
         foreignKeys: 'user_id',
        as:'blog_posts', // um usuario tem varios posts mas um post só pertence a um usuário
    });
  };
  
  return User;
};

module.exports = UserModel;