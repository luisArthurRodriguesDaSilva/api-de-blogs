const express = require('express');
const { postControllers } = require('../controllers');
const { validateToken } = require('../middleweres/validateToken');

const router = express.Router();

router.post('/', validateToken, postControllers.postApost);

module.exports = router;
