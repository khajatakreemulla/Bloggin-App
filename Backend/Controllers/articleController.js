const Article = require("../Models/article")

exports.createArticle = (req, res)=>{
    var article = req.body;
    var userId = req.session.user.userId
    article.author = userId
    var newArticle = new Article(article);
    newArticle.save().then(savedArticle=>{
        return res.status(201).send({article : savedArticle, success: true})
    }).catch(error=>{
        return res.status(500).send({ errorMessage: "Error creating article", error, success: false });
    })
}