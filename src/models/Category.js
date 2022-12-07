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
  );

  return Category;
};

module.exports = CategoryModel;