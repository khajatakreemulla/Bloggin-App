const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description: {
        type: String,
        required: true
    },
    featuredImageUrl: {
        type:  String,
    },
    tags : {
        type : String
    },
    author : {
        type : String
    }
}, {timestamps: true});

ArticleSchema.set('toJSON', {
    transform: (doc, ret, options) => {
        ret.id = ret._id.toString();
        delete ret._id;
        delete ret.__v;
        return ret;
    }
});

module.exports = mongoose.model('articles', ArticleSchema);
