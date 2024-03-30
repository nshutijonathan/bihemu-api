// variables declaration
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
require("dotenv").config()

// server routes
const sellerRouter = require("./routes/ownerRoute")

// app usage 
app.use(express.json())
app.use(cors())
app.use("/" , sellerRouter)


// universal routes
app.get("/" , (req,res)=>res.send("our route is working perfectly fine"))
app.get("/*" , (req,res)=> res.send("the route was not found"))

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
