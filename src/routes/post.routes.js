const express = require('express');
const { postControllers } = require('../controllers');
const { validateToken } = require('../middleweres/validateToken');
const { validatePostFormat, validateIfCategorieExist } = require('../middleweres/validations');

const router = express.Router();

router.post('/',
  validateToken, 
  validatePostFormat, 
  validateIfCategorieExist, 
  postControllers.postApost);

router.get('/:id', validateToken, postControllers.getAPost);
router.get('/', validateToken, postControllers.getAllPosts);
module.exports = router;
