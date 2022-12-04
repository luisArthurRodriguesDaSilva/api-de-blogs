const { categoriesServices } = require('../services');

const getAllCategories = async (req, res) => {
  const categories = await categoriesServices.getCategories();
  return res.status(200).json(categories);
};

module.exports = { getAllCategories };