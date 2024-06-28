
const Article = require("../Models/article")

exports.getDashboard = (req, res)=>{
    var userId = req.session.user.userId;
    Article.find({author : userId}).sort({updatedAt : -1, createdAt : -1}).then(articles=>{
        return res.status(200).send({articles: articles, success: true})
    }).catch(error=>{
        return res.status(500).send({ errorMessage: "Error in getting articles", error, success: false });
    })
}