const express = require("express");
const cors = require("cors");
const jwt=require("jsonwebtoken")
const app = express(); //Creating a server
const quizRouter = require("./router/quiz");
const userdata = require("./db/users");

app.use(cors());
const port = 3000;
app.use(express.json());
/**
 *  Get
 * Post
 * Put
 * patch
 * Delete
 */

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.use("/quiz", quizRouter);

// app.get("/quiz",(req, res) =>{
//     res.send(quizzes.data)
// })

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const isUserVerified = userdata.users.some(user=>username===username && user.password===password)
  if(isUserVerified){
    res.json({message: "User Verified"})
  }
  else{
    res.status(401).json({message:"Invalid credentials"})
  }
});

app.listen(process.env.port || port, () => {
  console.log("Server started");
});
