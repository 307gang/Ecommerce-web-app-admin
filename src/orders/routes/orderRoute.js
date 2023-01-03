const order = require("../controller/orderController");
const info = require("../controller/orderInfoController");

var express = require("express");
var router = express.Router();

router.get("", order);
router.get("/:id", info);

module.exports = router;
