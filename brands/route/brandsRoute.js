const controller = require('../controller/brandsController');
const express = require('express');
const router = express.Router();

router.get('/', controller);

module.exports = router;