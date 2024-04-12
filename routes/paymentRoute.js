const express = require("express")
const {requestPayment , cashoutt , checkBalance}   = require("../controllers/payment")
const paymentRoute = express.Router()

paymentRoute.post("/pay" , requestPayment)
paymentRoute.post("/cashout" , cashoutt)
paymentRoute.get("/balance" , checkBalance)



module.exports = paymentRoute