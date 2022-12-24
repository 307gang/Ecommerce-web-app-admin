const controller = require('../controller/usersController');
const express = require('express');
const router = express.Router();

router.get('/', controller);

module.exports = router;