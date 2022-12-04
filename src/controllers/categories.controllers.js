const { categoriesServices } = require('../services');

const getAllCategories = async (req, res) => {
  const categories = await categoriesServices.getCategories();
  return res.status(200).json(categories);
};

const addCategory = async (req, res) => {
  const category = req.body;
  const resp = await categoriesServices.addCategory(category);
  res.status(201).json(resp);
};

module.exports = { getAllCategories, addCategory };