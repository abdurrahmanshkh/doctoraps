const doctorModel = require("../models/doctorModel");

const getDoctorInfoController = async (req, res) => {
  try {
    const doctor = await doctorModel.findOne({
        userId: req.body.userId
    });
    res.status(200).send({
        success: true,
        message: "Doctor info fetched successfully",
        data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
        message: "Error in getting doctor info",
        success: false,
        error
    });
  }
};

module.exports = {
  getDoctorInfoController,
};
