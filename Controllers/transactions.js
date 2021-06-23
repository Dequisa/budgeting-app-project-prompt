const transactions = require("express").Router();
const transactionsArray = require("../Models/transaction")

transactions.get("/", (request, response) => {
    response.json(transactionsArray)
});

transactions.get("/:index", (request, response) => {
    response.json(transactionsArray[request.params.index])
});

transactions.post("/", (request, response) => {
    transactionsArray.push(request.body);
    response.json(transactionsArray)
});

transactions.delete("/:index", (request, response) => {
    const deleteTransaction = transactionsArray.splice(request.params.index, 1)
    response.json(deleteTransaction);
});

transactions.put("/:index", (request, response) => {
    transactionsArray[request.params.index] = request.body;
    response.json(transactionsArray[request.params.index])
});

module.exports = transactions;