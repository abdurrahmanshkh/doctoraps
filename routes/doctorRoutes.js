const express = require("express");

const authmiddleware = require("../middlewares/authmiddleware");

const router = express.Router();

const {
    getDoctorInfoController,
} = require("../controllers/doctorCtrl.js");

router.post("/getDoctorInfo", authmiddleware, getDoctorInfoController);

module.exports = router;
