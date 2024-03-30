const mongoose = require("mongoose")

const owner = mongoose.Schema({
    username:{
        type:String
        
    
    },
    email:{
        type:String
    
    },
    phone:{
        type:Number
    
    },
    password:{
        type:String
    
    },
    image:{
        type:String
    
    } , 
    gender:{
        type:String
    
    }
   
})

module.exports = mongoose.model ("ownerInformation" , owner)