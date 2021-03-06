const express = require("express");
const router = express.Router();
const catchAsync = require("../utils/catchAsync");
// const passport = require("passport");
const { auth } = require("../middleware.js");
const users = require("../controllers/users");

router
  .route("/register")
  .get(users.renderRegister)
  .post(catchAsync(users.register));

router.route("/login").get(users.renderLogin).post(catchAsync(users.login));

router.get("/forgotPassword", users.renderForgotPassword);

router.post("/forgotPassword/email", users.emailVerification);

router
  .route("/reset/:token/email")
  .get(users.renderToken)
  .post(users.changePassword);

router.get("/logout", auth, users.logout);

module.exports = router;
