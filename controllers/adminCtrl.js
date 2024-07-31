const userModel = require("../models/userModles");
const doctorModel = require("../models/doctorModel");

const getAllUsersController = async(req,res) => {
    try {
        const users = await userModel.find({});

        res.status(200).send({
            success: true,
            message: "All users fetched successfully",
            data: users
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false, 
            message: "Error while fetching users",
            error
        });  
    }
};

const getAllDoctorsController = async (req, res) => {
    try {
        const doctors = await doctorModel.find({});

        res.status(200).send({
            success: true,
            message: "All doctors fetched successfully",
            data: doctors
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while fetching doctors",
            error
        });
    }
};

module.exports = {
    getAllUsersController,
    getAllDoctorsController
};