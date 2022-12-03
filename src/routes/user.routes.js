const express = require('express');
const { userControllers } = require('../controllers');
const { validateUserFormat } = require('../middleweres/validations');

const router = express.Router();

router.post('/', validateUserFormat, userControllers.registerUser);

module.exports = router;
