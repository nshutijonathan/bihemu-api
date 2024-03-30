const owner = require('../models/Owner');
const uploadToCloud = require('../helpers/cloudinary');
const bcrypt = require('bcryptjs');

// getting owners
const getOwners = async (req, res) => {
  try {
    const owners = await owner.find();
    res.status(200).json({ status: 'success', owners });
  } catch (error) {
    res.status(400).json({ status: 'failed', message: error.message });
  }
};
// creating the owner
const createOwner = async (req, res) => {
  try {
    const geSalt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(req.body.password, geSalt);
    const uplodFile = await uploadToCloud(req.file, res);

    const userExist = await owner.findOne({ email: req.body.email });
    // creating owner

    if (userExist) {
      res
        .status(400)
        .json({ status: 'failed', message: 'user already exists' });
    } else {
      const shopOwner = await owner.create({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: hash_password,
        image: uplodFile.secure_url,
        gender: req.body.gender,
      });
      res.status(201).json({ status: 'created new owner', shopOwner });
    }
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
    console.log(error);
  }
};

// getting single owner

const singleOwner = async(req,res)=>{
    try {
        const single = await owner.findById(req.params.id)
        res.status(200).json({status:"success" , single})
    } catch (error) {
        res.status(400).json({status:"failed" , message:error.message})
    }
}

const deleteOwner =async(req,res)=>{
    try {
        const removeOwner = await owner.findByIdAndDelete(req.params.id)
        res.status(200).json({status:"deleted successfully"})
    } catch (error) {
        res.status(500).json({status:"failed" , message:error.message})
    }
}




module.exports = { getOwners, createOwner,singleOwner ,deleteOwner };
