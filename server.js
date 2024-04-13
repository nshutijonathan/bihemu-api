// variables declaration
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
require("dotenv").config()



// app usage 
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false}));
app.get("/" , (req,res)=>res.send("App running successfully"))
// routes
// admin router
const adminRouter = require("./routes/adminRoute")
app.use("/" , adminRouter)
// shop Router
const shopRouter = require("./routes/shopRoute")
app.use("/" , shopRouter)
// debit Router
const debitRouter=require("./routes/debitRouter")
app.use("/" , debitRouter)
// payment route
const paymentRoute = require("./routes/paymentRoute")
app.use("/" , paymentRoute)
// invoice Router
const router = require("./routes/reportRoute")
app.use("/" , router)

// report Router 
const route = require("./routes/testRoute")
app.use("/" , route)
// end of routes



//server connection

const connection = async ()=>{
  try {
    await mongoose.connect(process.env.db)
    console.log("connection successfully")
    app.listen(process.env.port , ()=>console.log(`app running on http://localhost:${process.env.port}`))
  } catch (error) {
    console.log(error)
  }
}

connection()
