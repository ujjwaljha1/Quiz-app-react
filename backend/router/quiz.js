const express = require("express");
const quizRouter = express.Router();
const quizzes = require("../db/quizes");
const {authVerify} = require("../controller/authController")
quizRouter.route("/").get(authVerify,(req, res) => {
  res.json(quizzes.data);
});

module.exports=quizRouter