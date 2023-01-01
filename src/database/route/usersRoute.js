var express = require("express");
var router = express.Router();

const controller = require("../controller/userController");

router.get("", controller.getAllUser);

module.exports = router;
