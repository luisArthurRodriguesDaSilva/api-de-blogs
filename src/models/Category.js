const CategoryModel = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      },
    name:DataTypes.STRING,
  },
  {
    sequelize,
    underscored:true,
    timestamps: false,
    tableName:'categories',
  },
  // Category.associate = ({PostCategory}) =>{
  //   Category.hasMany(PostCategory,{
  //     foreingKeys:'category_id',
  //     as:'post_category',
  //   })
  // }
  );

  return Category;
};

module.exports = CategoryModel;