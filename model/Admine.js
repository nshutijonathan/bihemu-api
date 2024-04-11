const mongoose  = require("mongoose")

const adminSchema = mongoose.Schema({
    email:{
        type:String 
    },
    password:{
           type:String
    },
    username:{
        type:String
    },
    image:{
       type:String
    }


})

module.exports = mongoose.model("Admin" , adminSchema)