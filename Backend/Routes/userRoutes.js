const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const isAuthenticated = require("../middleware/isAuthenticated")

router.get("/dashboard", isAuthenticated, userController.getDashboard)


module.exports = router;
