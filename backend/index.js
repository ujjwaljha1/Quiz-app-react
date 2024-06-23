const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express(); // Creating a server
const quizRouter = require("./router/quiz");
const category =require("./router/categories")
const { loginRouter, signUpRouter} = require("./router/auth");

dotenv.config();

app.use(cors());
const port = process.env.PORT || 3030;
app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.use("/categories", category)
app.use("/quiz", quizRouter);
app.use("/login", loginRouter);
app.use("/signup", signUpRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
