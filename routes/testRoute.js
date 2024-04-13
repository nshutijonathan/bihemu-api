const express = require("express")
const testPdf = require("../service/testPdf")
const {getShop} = require("../controllers/shopOwner")
const router = express.Router()
  
router.get("/report" , async(req,res ,next)=>{
   try {
    const shopp = await getShop()
    const stream = res.writeHead(200 ,{
        "Content-Type":"application/pdf",
        "Content-Disposition":"attachment;filename=report.pdf"
    })

    testPdf.buildPDF(
        shopp.shops ,
        (chunk)=>stream.write(chunk),
        ()=>stream.end()
    )
   } catch (error) {
    console.log(error)
   }
})
module.exports = router