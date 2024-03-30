const express = require('express')
// file check

const check =require("../helpers/multer")
// controllers
const {getOwners , createOwner , singleOwner , deleteOwner} = require("../controllers/owner")

// routes 

const sellerRouter = express.Router()
sellerRouter.get("/owners" , getOwners)
sellerRouter.post("/owner" , check.single("image") , createOwner)
sellerRouter.get("/owner/:id" , singleOwner)
sellerRouter.delete("/owner/:id" , deleteOwner)


module.exports = sellerRouter