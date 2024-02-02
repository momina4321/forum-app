const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    content: {type:String, required:true}, //content
    author : {type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true},
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const Comment = mongoose.model('Comment',commentSchema)

module.exports=Comment;