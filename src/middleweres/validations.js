const { loginSchema, newUserSchema, categorieSchema, postSchema } = require('./schemas');
const { categoriesServices } = require('../services');

const validateloginFormat = async (req, res, next) => { 
  const { error } = await loginSchema.validate(req.body);
  if (error) return res.status(400).json({ message: 'Some required fields are missing' });
  next();
};

const validateUserFormat = async (req, res, next) => {
  const { error } = await newUserSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

const validateCategorieFormat = async (req, res, next) => {
  const { error } = await categorieSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

const validatePostFormat = async (req, res, next) => {
  const { error } = await postSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.message });
  next();
};

const validateIfCategorieExist = async (req, res, next) => {
  const { categoryIds } = req.body;
  const existedCategories = await categoriesServices.getCategories();
  if (existedCategories.length >= Math.max(categoryIds)) {
 return res.status(400).json(
    { message: 'one or more "categoryIds" not found' },
    ); 
}
  return next();
};

module.exports = { 
  validateloginFormat, 
  validateUserFormat, 
  validateCategorieFormat, 
  validatePostFormat,
  validateIfCategorieExist,
 };
