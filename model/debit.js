const mongoose = require("mongoose")

const debit = mongoose.Schema({
   clientName : {
    type:String ,

   },
   clientPhone : {
    type:Number ,

   },
   itemsSold :{
    type:String ,

   },
   createdAt:{
    type:Date ,
    default:Date.now()

   },
   payingAt : {
    type:String ,

   },
})

module.exports = mongoose.model("debitInfo" , debit )