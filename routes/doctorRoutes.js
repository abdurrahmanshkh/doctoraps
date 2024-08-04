const express = require("express");

const authmiddleware = require("../middlewares/authmiddleware");

const router = express.Router();

const {
    getDoctorInfoController,
    updateProfileController,
} = require("../controllers/doctorCtrl");

//Post get doctor info
router.post("/getDoctorInfo", authmiddleware, getDoctorInfoController);

//Post update profile
router.post("/updateProfile", authmiddleware, updateProfileController);

module.exports = router;
