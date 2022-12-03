// src/models/user.model.js

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      },
    display_name:DataTypes.STRING,
    email:DataTypes.STRING,
    password:DataTypes.STRING,
    image:DataTypes.STRING,
  },
  {
    sequelize,
    timestamps: false,
    tableName:'users',
  }
  );

  // User.associate = (models) => {
  //   User.hasMany(models,
  //     {
  //       foreingKeys: 'userId',
  //       as:'blog_posts',
  //   });
  // };
  
  return User;
};

module.exports = UserModel;