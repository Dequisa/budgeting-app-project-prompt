const transactionsController = require("./Controllers/transactions")
const express = require("express");
const app = express();
const cors = require("cors");
// const { response } = require("express");

app.use(cors())
app.use(express.json())
console.log(express.json())

app.use("/transactions", transactionsController);

app.get("/", (request, response)=>{
    response.send("Welcome to my Server!")
})

app.get("*",(request, response)=>{
    response.status(404).send("PAGE NOTE FOUND")
})

module.exports = app;