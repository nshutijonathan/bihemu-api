const express = require("express")

const {getShop , createShop, getSingleShop, removeSingleShop, updateShopOwner, authentication  } = require("../controllers/shopOwner")
const shopRouter = express.Router()
shopRouter.get("/shop" , getShop)
shopRouter.post("/shop" , createShop)
shopRouter.get("/shop/:id" , getSingleShop)
shopRouter.delete("/shop/:id" , removeSingleShop)
shopRouter.put("/shop/:id" , updateShopOwner)
shopRouter.post("/shop/login" , authentication)
module.exports  = shopRouter