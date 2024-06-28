const mongoose = require('mongoose');
const md5 = require("md5")

const UserSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    fullName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String
    }
}, {timestamps: true});

UserSchema.pre("save", function(next){
    const User = this
    const emailHash = User.email.trim().toLowerCase()
    User.profilePic = 'https://www.gravatar.com/avatar/'+ md5(emailHash)+ '?d=identicon'
    return next()
})

module.exports = mongoose.model('User', UserSchema);
