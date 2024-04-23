const express = require("express")
const testPdf = require("../service/testPdf")
const {getShop} = require("../controllers/shopOwner")
const {buildPDF} = require("../service/pdf-service")
const router = express.Router()

router.get("/pdf" , async(req,res)=>{
    try {
        const shops = await getShop()
        const users = await buildPDF(shops)

        res.setHeader(`Content-Type:application/pdf`)
        res.setHeader(`Content-Disposition:attachment ; filename=report.pdf`)
        return users
    } catch (error) {
        res.status(500).json({status:"failed" , message:error.message})
    }
})
  

module.exports = router