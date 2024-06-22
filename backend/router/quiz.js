const express = require("express");
const quizRouter = express.Router();
const quizzes = require("../db/quizes");

quizRouter.route("/").get((req, res) => {
  res.json(quizzes.data);
});

module.exports=quizRouter