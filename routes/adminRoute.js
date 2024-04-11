const express= require("express")
const {getAdmin , createAdmin , removeAdmin ,getSingleUser , updatee} = require("../controllers/adminController")
const checkFile = require("../helpers/multer")
const router = express.Router()
router.get("/admin" , getAdmin)
router.post("/admin" , checkFile.single("image"), createAdmin)
router.delete("/admin/:id" , removeAdmin)
router.get("/admin/:id" , getSingleUser)
router.put("/admin/:id" , checkFile.single("image") , updatee)

module.exports = router