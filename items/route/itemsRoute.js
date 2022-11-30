const controller = require('../controller/itemsController');
const info = require('../controller/intemsInfoController')
const express = require('express');
const router = express.Router();

router.get('/', controller);
router.get('/info', info);

module.exports = router;