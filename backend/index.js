const express=require("express")
const app = express() //Creating a server
const quizzes=require("./db/quizes")

const port=3000;
/**
 *  Get
 * Post
 * Put
 * patch
 * Delete
 */

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get("/quiz",(req, res) =>{
    res.send(quizzes)
})

app.listen(process.env.port || port,()=>{
    console.log("Server started")
})