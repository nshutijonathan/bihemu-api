const express = require("express")
const {readDebit , createDebit} = require("../controllers/debitController")
const debitRouter = express.Router()

debitRouter.get("/debit" , readDebit)
debitRouter.post("/debit" , createDebit)

module.exports = debitRouter