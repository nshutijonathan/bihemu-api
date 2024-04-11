const cloudinary = require("cloudinary")
require("dotenv").config()


 cloudinary.config({
    cloud_name:process.env.cloudName,
    api_key:process.env.apiKey , 
    api_secret:process.env.apiSecret,

})

const uploadToCloud = async(file ,res)=>{
    try {
        const response= await cloudinary.uploader.upload(file.path)
          return response ; 
    } catch (error) {
       return  res.status(500).json({status:"failes" , message:error.message})
    }
}

module.exports = uploadToCloud