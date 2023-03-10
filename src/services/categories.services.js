const { Category } = require('../models');

const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const addCategory = async (category) => {
  const newCategory = (await Category.create({ name: category.name })).dataValues;
  return newCategory;
};

module.exports = { getCategories, addCategory };