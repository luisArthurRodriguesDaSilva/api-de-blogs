const express = require('express');
const { postControllers } = require('../controllers');
const { validateToken } = require('../middleweres/validateToken');
const { validatePostFormat } = require('../middleweres/validations');

const router = express.Router();

router.post('/', validateToken, validatePostFormat, postControllers.postApost);
router.get('/:id', validateToken, postControllers.getAPost);
module.exports = router;
