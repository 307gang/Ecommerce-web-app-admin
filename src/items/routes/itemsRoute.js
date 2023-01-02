const controller = require("../controller/itemsController");
const info = require("../controller/itemsInfoController");
const infoSave = require("../controller/itemsSaveController");
const express = require("express");
const router = express.Router();

router.get("/", controller);
router.get("/:id", info);
router.post("/:id", infoSave);

module.exports = router;
