const { Category } = require('../models');

const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const addCategory = async (category) => {
  const newCategory = (await Category.create({ name: category.name })).dataValues;
  console.log('cat', newCategory);
  return newCategory;
};

module.exports = { getCategories, addCategory };