const uploadToCloud = require('../helpers/cloudinary');
const adminSchema = require('../model/Admine');
const bcrypt = require('bcryptjs');

const getAdmin = async (req, res) => {
  try {
    const admine = await adminSchema.find();
    res.status(200).json({ status: 'success', admine });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};

const createAdmin = async (req, res) => {
  try {
    const userExistance = await adminSchema.findOne({ email: req.body.email });
    if (userExistance) {
      res.status(401).json({ status: 'user already exisists' });
    } else {
      const hashi = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(req.body.password, hashi);
      const picturee = await uploadToCloud(req.file, res);
      const createAdmin = await adminSchema.create({
        email: req.body.email,
        password: hashPassword,
        username: req.body.username,
        image: picturee.secure_url,
      });
      res.status(201).json({ status: 'success', createAdmin });
    }
  } catch (error) {
    res.status(500).json({ status: 'success', message: error.message });
  }
};

const removeAdmin = async (req, res) => {
  try {
    await adminSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: 'success' });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};
const getSingleUser = async (req, res) => {
  try {
    const singleUser = await adminSchema.findById(req.params.id);
    res.status(200).json({ status: 'success', singleUser });
  } catch (error) {
    res
      .status(500)
      .json({ status: 'cannot find the user', message: error.message });
  }
};

const updatee = async (req, res) => {
  try {
    if (req.file) {
      const uploade = await uploadToCloud(req.file, res);
      await adminSchema.findByIdAndUpdate(req.params.id, {
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        image: uploade.secure_url,
      });
    } else {
      await adminSchema.findByIdAndUpdate(req.params.id, {
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
      });
    }

    res
      .status(200)
      .json({ status: 'success', message: 'updated successfully' });
  } catch (error) {
    res.status(500).json({ status: 'failed', message: error.message });
  }
};
module.exports = { getAdmin, createAdmin, removeAdmin, getSingleUser, updatee };
