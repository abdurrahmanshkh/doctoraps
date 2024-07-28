const express = require('express');
const { loginController, registerController, authController } = require('../controllers/userCtrl');
const authmiddleware = require('../middlewares/authmiddleware');

const router = express.Router();

router.post('/login', loginController);
router.post('/register', registerController);
router.post('/getUserData', authmiddleware, authController); 

module.exports = router;
