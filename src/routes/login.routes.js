const express = require('express');
const { loginControllers } = require('../controllers');
const { validateloginFormat } = require('../middleweres/validations');

const router = express.Router();

router.get('/ei', (req, res) => res.status(200).json({ message: 'testando problema' }));
router.post('/', validateloginFormat, loginControllers.login);

module.exports = router;
