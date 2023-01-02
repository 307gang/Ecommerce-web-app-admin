const controller = require("../controller/usersController");
const infoController = require("../controller/userInfoController");
const express = require("express");
const router = express.Router();

router.get("/", controller);
router.get("/:id", infoController);

module.exports = router;
