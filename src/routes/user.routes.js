const express = require('express');
const { userControllers } = require('../controllers');
const { validateToken } = require('../middleweres/validateToken');
const { validateUserFormat } = require('../middleweres/validations');

const router = express.Router();

router.post('/', validateUserFormat, userControllers.registerUser);
router.get('/', validateToken, userControllers.getAllUsers);
router.get('/:id', validateToken, userControllers.getUser);
module.exports = router;
