const shop = require('../model/shopOwner');
const { getSingleUser } = require('./adminController');

const getShop = async (req, res) => {
  try {
    const shops = await shop.find();
    res.status(200).json({ status: 'success', shops });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};

const createShop = async (req, res) => {
  try {
    const shopExisist = await shop.findOne({name:req.body.name})
    if(!shopExisist){
        const createNewShop = await shop.create({
           name:req.body.name,
           shopLocation:req.body.shopLocation,
           phoneNumber:req.body.phoneNumber,
           gender:req.body.gender
        
        })
        res.status(201).json({message:"shop created" , createNewShop})

    }
    else{
        res.status(200).json({status:"user already exisists"})
    }
   
  } catch (error) {res.status(401).json({status:"failed" , message:error.message})}
};

const getSingleShop = async(req,res)=>{
    try {
        const singleUser = await shop.findById(req.params.id)
        res.status(200).json({status:"success" , singleUser})
    } catch (error) {
        res.status(500).json({status:"failed" , message:error.message})
    }
}
const removeSingleShop = async(req,res)=>{
    try {
         await shop.findByIdAndDelete(req.params.id)
        res.status(200).json({status:"success"}) 
    } catch (error) {
        res.status(500).json({status:"failed" , message:error.message})
    }
}

const updateShopOwner = async(req,res)=>{
    try {
        const updatee = await shop.findByIdAndUpdate(req.params.id , {
            name:req.body.name,
            shopLocation:req.body.shopLocation,
            phoneNumber:req.body.phoneNumber,
            gender:req.body.gender
        })
        res.status(200).json({status:"updated" , updatee})
    } catch (error) {
        res.status(500).json({status:"failed" , message:error.message})
    }
}

module.exports = { getShop, createShop , getSingleShop ,removeSingleShop , updateShopOwner};
