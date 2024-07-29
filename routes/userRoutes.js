const express = require('express');
const {
  loginController,
  registerController,
  authController,
  registerDoctorController,
  getAllNotificationsController,
} = require("../controllers/userCtrl");
const authmiddleware = require('../middlewares/authmiddleware');

const router = express.Router();

router.post('/login', loginController);

router.post('/register', registerController);

router.post('/getUserData', authmiddleware, authController); 

router.post("/register-doctor", authmiddleware, registerDoctorController); 

router.post("/get-all-notifications", authmiddleware, getAllNotificationsController); 

module.exports = router;
