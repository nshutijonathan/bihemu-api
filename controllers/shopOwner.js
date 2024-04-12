const shop = require('../model/shopOwner');
const bcrypt = require('bcryptjs');
const { json } = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const getShop = async (req, res) => {
  try {
    const shops = await shop.find();
    res.status(200).json({ status: 'success', shops });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};
// creating shop owner
const createShop = async (req, res) => {
  try {
    const gens = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(req.body.password, gens);
    const shopExisist = await shop.findOne({ name: req.body.name });
    if (!shopExisist) {
      const createNewShop = await shop.create({
        name: req.body.name,
        shopLocation: req.body.shopLocation,
        phoneNumber: req.body.phoneNumber,
        gender: req.body.gender,
        email: req.body.email,
        password: hashed,
      });
      res.status(201).json({ message: 'shop created', createNewShop });
    } else {
      res.status(200).json({ status: 'user already exisists' });
    }
  } catch (error) {
    res.status(401).json({ status: 'failed', message: error.message });
  }
};

// reading single shop
const getSingleShop = async (req, res) => {
  try {
    const singleUser = await shop.findById(req.params.id);
    res.status(200).json({ status: 'success', singleUser });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};
// removing shop
const removeSingleShop = async (req, res) => {
  try {
    await shop.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: 'success' });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};
// updating the shop
const updateShopOwner = async (req, res) => {
  try {
    const updatee = await shop.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      shopLocation: req.body.shopLocation,
      phoneNumber: req.body.phoneNumber,
      gender: req.body.gender,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json({ status: 'updated', updatee });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};

// authenticating shop

const authentication = async (req, res) => {
  try {
    const user = await shop.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json({ status: 'user not found' });
    }
    if (await bcrypt.compare(req.body.password, user.password)) {
     res.status(200). json({
        status: 'user logged in successfully',
        token: jwt.sign({ userId: user._id }, process.env.secret, {
          expiresIn: '2days',
        }),
        user
      });
    } else {
      res.status(500).json({ message: 'Wrong user credentials' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: 'failed', message:error.message});
  }
};

module.exports = {
  getShop,
  createShop,
  getSingleShop,
  removeSingleShop,
  updateShopOwner,
  authentication,
};
