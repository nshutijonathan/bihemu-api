

const PaypackJs = require("paypack-js").default
require("dotenv").config()

const paypack = new PaypackJs({
  client_id:process.env.client_id,
  client_secret:process.env.client_secret
})

const requestPayment = async(req,res)=>{
  const paymentNumber = req.body.number 
  const amount = req.body.amount
  try {
        const response = await paypack.cashin({
          number:paymentNumber,
          amount:amount,
          environment:"development"
        })
        console.log("success" , response)
        res.status(200).json({
          status:"success waitinng for approval",
          data:response.data
        })
    
  } catch (error) {
    

    res.status(500).json({status:"failed" , message:error.message})
  }
}

// cashout 

const cashoutt = async(req,res)=>{
  const paymentNumber = req.body.number
  const amount = req.body.amount
  try {
    const response = await paypack.cashout({
      number:"0793366074",
      amount:amount,
      environment:"development"
    })
    res.status(200).json({status:"success" , response})
  } catch (error) {
    res.status(500).json({
      status:"failed",
      message:error.message
    })
  }
}

const checkBalance = async(req,res)=>{
  try {
    const response = await paypack.me()
    console.log("success")
    res.status(200).json(response.data.mtn_balance)
  } catch (error) {
    console.log("encoutered an error" , error)
    res.status(500).json({status:"failed" , message:error.message})
  }
}

module.exports ={requestPayment , cashoutt , checkBalance}