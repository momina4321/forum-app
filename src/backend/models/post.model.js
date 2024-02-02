const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model for the author
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: null,
    },
    comments :[{ //array of comments to the post 
        type:Schema.Types.ObjectId,
        ref:'Comment'}]


})


const Post = mongoose.model('Post',postSchema)

module.exports = Post;