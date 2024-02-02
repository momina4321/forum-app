let Post = require('../models/post.model')



//display all posts 
const Posts = async(req,res) =>{
    Post.find().populate('author','username').then(posts => res.json(posts))
    .catch(err => res.status(400).json('Error'+err))
}


//view post 
const viewPost = async(req,res) =>{
    const postId = req.params.id;
    Post.findById(postId).then(post => res.json(post))
}

//add Post
const addPost = async(req,res) => {
const title = req.body.title;
const content = req.body.content;
const author = req.body.author;
const comments = [];
let newpost = new Post({title,content,author,comments})
newpost.save().then(()=> { res.json("post added!")}).catch(err => res.status(400).json( 'Error: ' +err ))

}

//edit post 
const updatePost = async(req,res) => {
     Post.findbyId(req.params.id).then(post => {
        post.title = req.body.title
        post.content = req.body.content
        post.updatedAt = Date.now;
        
        post.save().then(()=>{res.json("post updated!")}).catch(err => res.status(400).json( 'Error: ' +err ))
     })

}

//delete post
const deletePost = async(req,res) =>{
    Post.findbyIdAndDelete(req.params.id).then(()=>res.json("exercise deleted"))
    .catch(err=>res.status(400).json('error'+err));
}



module.exports = {Posts, addPost, updatePost, deletePost, viewPost}