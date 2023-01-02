const controller = require("../controller/newItemController");
const addItemController = require("../controller/addNewItemController");

const express = require("express");
const router = express.Router();

router.get("", controller);
router.post("", addItemController);

module.exports = router;
