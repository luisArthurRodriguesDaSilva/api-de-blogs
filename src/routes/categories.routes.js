const express = require('express');
const { getAllCategories } = require('../controllers/categories.controllers');
const { validateToken } = require('../middleweres/validateToken');

const router = express.Router();

router.post('/', validateToken);
router.get('/', getAllCategories);

module.exports = router;
