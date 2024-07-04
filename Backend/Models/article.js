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
    },
    authorProfilePic : {
        type : String
    },
    authorName : {
        type : String
    },
    publishingStatus : {
        type : String,
        default : 'draft',
        enum : ['draft', 'published']
    },
    featured : {
        type: Boolean,
        default : false
    },
    numberOfClicks: {
        type: Number,
        default: 0
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

ArticleSchema.index({ title: 'text', tags: 'text' });

module.exports = mongoose.model('articles', ArticleSchema);
