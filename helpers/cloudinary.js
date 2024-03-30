const cloudinary = require("cloudinary")
require ("dotenv").config()


cloudinary.config({
    cloud_name:process.env.cloudName,
    api_key:process.env.apiKey,
    api_secret:process.env.apiSecret,

})

const uploadToCloud = async(file,res)=>{
    try {
        const upload = await cloudinary.uploader.upload(file.path)
        return upload
    } catch (error) {
        res.status(400).json({status:"failed to upload to cloud",message:error.message})
    }
}

module.exports = uploadToCloud