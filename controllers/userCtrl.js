const userModel = require('../models/userModles');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const doctorModel = require('../models/doctorModel');

//Login Callback
const loginController = async (req, res) => {
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(200).send({ success: false, message: 'User not found' });
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(200).send({ success: false, message: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.status(200).send({ success: true, message: 'Logged in successfully', token: token });
    } catch (err) {
        console.log(err);
        res.status(500).send({ success: false, message: `Login Controller ${err.message}` });
    }
};

//Register Callback
const registerController = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(200).send({ success: false, message: 'User already exists' });
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newUser = new userModel(req.body);
        await newUser.save();
        return res.status(201).send({ success: true, message: "Registered successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).send({ success: false, message: `Register Controller ${err.message}` });
    }
};

const authController = async (req, res) => {
    try{
        const user = await userModel.findOne({_id:req.body.userId});
        user.password=undefined;
        if(!user){
            return res.status(200).send({success: false, message: 'User not found'});
        }
        else{
            return res.status(200).send({success: true, data: user});
        }
    }
    catch(err){
        console.log(err);
        res.status(500).send({success: false, message: `Auth Controller ${err.message}`});
    }
}

const registerDoctorController = async (req, res) => {
    try{
        const newDoctor = await doctorModel({...req.body, status: 'pending'});
        await newDoctor.save();
        const adminUser = await userModel.findOne({isAdmin:true});
        const notification = adminUser.notification;
        notification.push({
            type: 'New Doctor Registration Request', 
            message: `${newDoctor.firstName} ${newDoctor.lastName} has applied for a doctor account`,
            data:
            {
                doctorId: newDoctor._id,
                name: newDoctor.firstName + " " + newDoctor.lastName,
                onClickPath:"/admin/doctors",
            },
        });
        await userModel.findByIdAndUpdate(adminUser._id, {notification});
        res.status(201).send({success: true, message: 'Doctor registered successfully'});
    }
    catch(err){
        console.log(err);
        res.status(500).send({success: false, message: `Register Doctor Controller ${err.message}`});
    }

};

module.exports = { loginController, registerController,authController, registerDoctorController };
