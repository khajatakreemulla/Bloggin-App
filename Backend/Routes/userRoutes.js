const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const isAuthenticated = require("../middleware/isAuthenticated")

router.get("/dashboard", isAuthenticated, userController.getDashboard)
router.get("/profile", isAuthenticated, userController.getUserDetails)
router.post("/profile/:id", isAuthenticated, userController.updateUserDetails)


module.exports = router;
