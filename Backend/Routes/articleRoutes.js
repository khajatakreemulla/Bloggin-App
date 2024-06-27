const express = require('express');
const router = express.Router();
const articleController = require("../Controllers/articleController")
const isAuthenticated = require("../middleware/isAuthenticated")

router.post("/write", isAuthenticated, articleController.createArticle)


module.exports = router;
