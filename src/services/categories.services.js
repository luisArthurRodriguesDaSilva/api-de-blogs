const { Category } = require('../models');

const getCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const addCategory = (Category);

module.exports = { getCategories };