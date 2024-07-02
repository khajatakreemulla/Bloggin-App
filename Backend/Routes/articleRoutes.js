const express = require('express');
const router = express.Router();
const articleController = require("../Controllers/articleController")
const isAuthenticated = require("../middleware/isAuthenticated")

router.post("/write", isAuthenticated, articleController.createArticle)
router.get("/latest", articleController.getLatestArticles)
router.get("/search", articleController.advanceSearch)
router.get("/:id", articleController.getArticleDetails)


module.exports = router;