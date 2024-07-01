
const Article = require("../Models/article");
const User = require("../Models/user")

exports.getDashboard = (req, res)=>{
    var userId = req.session.user.userId;
    Article.find({author : userId}).sort({updatedAt : -1, createdAt : -1}).then(articles=>{
        return res.status(200).send({articles: articles, success: true})
    }).catch(error=>{
        return res.status(500).send({ errorMessage: "Error in getting articles", error, success: false });
    })
}

exports.getUserDetails = (req, res)=>{
    var userId = req.session.user.userId;
    User.findOne({_id: userId}).then(user=>{
        return res.status(200).send({user: user, success:true})
    }).catch(error=>{
        return res.status(500).send({errorMessage: "Error in getting profile details", error, success: false})
    })
}

exports.updateUserDetails = (req, res)=>{
    var userData = req.body
    var userId = req.session.user.userId;
    var paramsId = req.params.id;
    if(userId !== paramsId){
        return res.status(401).send({errorMessage: "Not allowed to update user profile", success: false})
    }
    User.updateOne({_id: userId}, userData).then(updatedUserData=>{
        return res.status(200).send({user: updatedUserData, success: true})
    }).catch(error=>{
        return res.status(500).send({errorMessage: "Error in updating user details", error, success: false})
    })
}