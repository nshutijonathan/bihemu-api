const mongoose = require("mongoose")

const shop = mongoose.Schema({
    name:{
        type:String
    },
    shopLocation:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    gender:{
        type:String
    },
    paymentStatus:{
        type:String,
        default:"pending"
    },
    dateCreated:{
        type:Date,
        default:Date.now()
    },
  
   
})

module.exports = mongoose.model("shopInformation" , shop)