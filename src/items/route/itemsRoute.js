const controller = require('../controller/itemsController');
const info = require('../controller/itemsInfoController')
const express = require('express');
const router = express.Router();

router.get('/', controller);
router.get('/:id', info);

module.exports = router;