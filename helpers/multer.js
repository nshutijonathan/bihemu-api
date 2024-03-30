const multer = require('multer');
const path = require('path');

const checkFile = multer({
  storage: multer.diskStorage({}),
  fileFilter: async (req, file, cb) => {
    try {
      const extensionn=await path.extname(file.originalname).toLowerCase();
      const allowedExtensions =['.jpeg', '.png', '.gif', '.pdf', '.svg','.jpg' ]

      if(!allowedExtensions.includes(extensionn)){
        cb(new Error("file format is not supported" , false))
      }
      cb(null , true)
    } catch (error) {
        console.log(error)
    }
  },
});
module.exports = checkFile