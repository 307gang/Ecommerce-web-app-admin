const express = require('express');
const router = express.Router();

const loginController = require('../controller/loginController');
const registerController = require('../controller/registerController');
const forgotPwdController = require('../controller/forgotPwdController');

router.get('/login', loginController);
router.get('/register', registerController);
router.get('/password-reset', forgotPwdController);

module.exports = router;