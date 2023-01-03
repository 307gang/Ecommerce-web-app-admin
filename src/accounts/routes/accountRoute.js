const express = require("express");
const router = express.Router();

const loginController = require("../controller/loginController");
const registerController = require("../controller/registerController");
const forgotPwdController = require("../controller/forgotPwdController");
const logoutController = require("../controller/logoutController");
const profile = require("../controller/profilesController");

var passport = require("../models/authenticatePassport");

router.get("/login", loginController);
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/account/login?error=1",
  })
);

router.get("/logout", logoutController);

router.get("/info", profile.profileStep);
router.post("/info", profile.profileUpdate);

router.get("/register", registerController);
router.get("/password-reset", forgotPwdController);

module.exports = router;
