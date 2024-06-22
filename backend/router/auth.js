const express = require("express");
const loginRouter = express.Router();
const signUpRouter = express.Router();
const { loginHandler, signUpHandler } = require("../controller/authController");

loginRouter.route("/").post(loginHandler);
signUpRouter.route("/").post(signUpHandler);

module.exports = { loginRouter, signUpRouter };
