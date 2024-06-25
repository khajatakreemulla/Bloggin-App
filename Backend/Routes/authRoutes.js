const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController');
const isAuthenticated = require("../middleware/isAuthenticated")

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get("/is-authenticated", isAuthenticated, authController.isAuthenticated)
router.post('/logout', authController.logout);


module.exports = router;
