const controller = require("../controller/usersController");
const infoController = require("../controller/userInfoController");
const banController = require("../controller/banController");
const express = require("express");
const router = express.Router();

router.get("/", controller);
router.get("/:id", infoController);
router.post("/:id", banController);

module.exports = router;
