let Comment = require('../models/comment.model')
let Post = require('../models/post.model')

const addComment = async(req,res)=>{
    try{
    const content = req.body.content;
    const author = req.body.userid;
    const postid = req.params.postid; //get postid from params 
    let newComment = new Comment({content,author})
    await newComment.save()   //save comment to comment schema 

    const post = await Post.findById(postid) //find the post using postid
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    post.comments.push(newComment._id)  //add the comment reference to the post schema 
    await post.save().then(()=> { res.json("post saved!")}).catch(err => res.status(400).json( 'Error: ' +err ))
    }
    catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const viewComment = async (req,res) => { //view a single comment
    const commentid = req.params.commentid
    const comment = await Comment.findById(commentid)
    if (comment){
        res.status(200).json(comment)
    }
    else{
        console.log("comment not found ")
    }
}

const deleteComment = async(req,res) => {
    Comment.findByIdAndDelete(req.body.commentid).then(()=>res.json("comment deleted"))
    .catch(err=>res.status(400).json('error'+err));
}

module.exports = {addComment,deleteComment, viewComment};