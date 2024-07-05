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

exports.updateArticle = (req, res)=>{
    var article = req.body;
    var articleId = req.params.id;
    var userId = req.session.user.userId
    if(!req.session.user.isAdmin){
        delete article.publishingStatus;
        delete article.editorPick;
        delete article.featured
    }
    if((article.author !== userId) && !req.session.user.isAdmin){
        return res.status(200).send({errorMessage: "Not allowed to update article", success : false})
    }
    Article.findByIdAndUpdate(articleId, article).then(updatedArticle=>{
        return res.status(201).send({article : updatedArticle, success: true})
    }).catch(error=>{
        return res.status(500).send({ errorMessage: "Error updating article", error, success: false });
    })
}

exports.getArticleDetails = (req, res)=>{
    var articleId = req.params.id
    Article.findById(articleId).then(article=>{
        return res.status(200).send({article : article, success: true})
    }).catch(error=>{
        return res.status(500).send({ errorMessage: "Error in getting article", error, success: false });
    })
}

exports.getArticleList = (req, res)=>{
    var query = {
        deleted : false
    }
    if(!req.query.admin){
        query.publishingStatus = "published"
    }
    if(req.query.featured){
        query.featured = true
    }
    if(req.query.editorPick){
        query.editorsPick = true
    }
    Article.find(query).sort({createdAt: -1}).then(articles => {
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