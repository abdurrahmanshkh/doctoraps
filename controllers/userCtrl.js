const userModel= require('../models/userModles');
const bcrypt = require('bcryptjs');

//Login Callback
const loginController = () => {

};

//Register Callback
const resgisterController = async(req,res) => {
    try{
        const existingUser = await userModel.findOne({email:req.body.email})
        if(existingUser){
            return res.status(200).send({success:false,message:'User already exists'})
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        req.body.password = hashedPassword;
        const newUser = new userModel(req.body);
        await newUser.save();
        return res.status(201).send({ success: true, message: "Registered successfully" });
    }
    catch(err){
        console.log(err);
        res.status(500).send({success:false, message:`Register Controller ${err.message}`})
    }
};

module.exports = loginController;
module.exports = resgisterController;

