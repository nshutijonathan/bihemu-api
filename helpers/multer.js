const multer = require("multer")
const path = require("path")

const checkFile = multer({
    storage:multer.diskStorage({}),
    fileFilter:(req,file,cb)=>{
        const extension = path.extname(file.originalname).toLowerCase()
        const allowedExtension = [".jpg" , ".png" ,".gif" ,".jpeg" ,".svg" ,".pdf"]
        if(!allowedExtension.includes(extension)){
            cb(new Error("Unsupported file format" , false))
        }
        cb(null , true)
    }
})

module.exports = checkFile