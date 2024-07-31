const express = require("express");

const {
  getAllUsersController,
  getAllDoctorsController,
} = require("../controllers/adminCtrl");

const authmiddleware = require("../middlewares/authmiddleware");

const router = express.Router();

router.get("/getAllUsers", authmiddleware, getAllUsersController);

router.get("/getAllDoctors", authmiddleware, getAllDoctorsController);

module.exports = router;
