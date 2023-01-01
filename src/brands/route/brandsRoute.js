const controller = require("../controller/brandsController");
const infoController = require("../controller/brandsInfoController");
const express = require("express");
const router = express.Router();

router.get("/", controller);
router.get("/:id", infoController);

module.exports = router;
