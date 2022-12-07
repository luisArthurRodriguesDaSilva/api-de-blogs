const express = require('express');
const { categoriesControllers } = require('../controllers');
const { validateToken } = require('../middleweres/validateToken');
const { validateCategorieFormat } = require('../middleweres/validations');

const router = express.Router();

router.post('/', validateToken, validateCategorieFormat, categoriesControllers.addCategory);
router.get('/', validateToken, categoriesControllers.getAllCategories);
module.exports = router;
