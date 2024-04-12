
const debitSchema = require("../model/debit")


const readDebit = async(req,res)=>{
    try {
        const debits = await debitSchema.find()
        res.status(200).json({
            status:"success",
            debits
        })
    } catch (error) {
        res.status(500).json({
            status:"failed",
            message:error.message   
        })
    }
}
const createDebit = async(req,res)=>{
    try {
        const newDebit = await debitSchema.create({
            clientName:req.body.clientName , 
            clientPhone:req.body.clientPhone,
            itemsSold:req.body.itemsSold,
            payingAt:req.body.payingAt
        })
        res.status(201).json({status:"success ",newDebit})
    } catch (error) {
        res.status(500).json({status:"failed" , message:error.message})
    }
}

module.exports = {readDebit , createDebit}