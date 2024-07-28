const express = require('express');
const loginController = require('../controllers/userCtrl');
const resgisterController = require('../controllers/userCtrl');

const router = express.Router();

router.post('/login', loginController)
router.post('/register', resgisterController) 

module.exports = router;
