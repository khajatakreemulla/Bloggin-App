const Article = require("../Models/article")

exports.createArticle = (req, res)=>{
    var article = req.body;
    var userId = req.session.user.userId
    var authorProfilePic = req.session.user.profilePic
    var authorName = req.session.user.fullName
    article.author = userId
    article.authorProfilePic = authorProfilePic
    article.authorName = authorName
    var newArticle = new Article(article);
    newArticle.save().then(savedArticle=>{
        return res.status(201).send({article : savedArticle, success: true})
    }).catch(error=>{
        return res.status(500).send({ errorMessage: "Error creating article", error, success: false });
    })
}

exports.getArticleDetails = (req, res)=>{
    var articleId = req.param("id")
    Article.findById(articleId).then(article=>{
        return res.status(200).send({article : article, success: true})
    }).catch(error=>{
        return res.status(500).send({ errorMessage: "Error in getting article", error, success: false });
    })
}

exports.getLatestArticles = (req, res)=>{
    Article.find({}).sort({createdAt: -1}).then(articles => {
        return res.status(200).send({articles : articles, success: true})
    }).catch(error=>{
        return res.status(500).send({ errorMessage: "Error in getting articles", error, success: false });
    });
}

exports.advanceSearch = (req, res)=>{
    var searchText = req.query.q
    Article.aggregate([
        {
            $match: {
                $or: [
                    { title: { $regex: searchText, $options: 'i' } },
                    { tags: { $regex: searchText, $options: 'i' } }
                ]
            }
        }
    ]).then(articles => {
        return res.status(200).send({ articles: articles, success: true });
    }).catch(error => {
        return res.status(500).send({ errorMessage: "Error in searching articles", error, success: false });
    });
}