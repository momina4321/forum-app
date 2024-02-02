import React, {Component} from "react";
import axios from 'axios';
import Comment from "./Comment.component";
import Card from 'react-bootstrap/Card';


const Posts = props => (
  <div>
    <Card style={{marginBottom: `30px`}}>
      <Card.Body>
        <Card.Title>{props.post.title}</Card.Title>
        <Card.Text>{props.post.content}</Card.Text>
        <Card.Text> {props.post.createdAt.substring(0,10)}</Card.Text>
        <Card.Text>Created by @{props.post.author.username}</Card.Text>
        <Comment postid={props.post._id}/>
      </Card.Body>
    </Card>

    
</div>

  )

export default class AllPosts extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts: [],
        }
    }


    componentDidMount(){
        axios.get('http://localhost:3000/post/').then(
            res => { this.setState({posts: res.data}) } 
        )

    }

    allposts(){
        return this.state.posts.map((post =>{
            return <Posts  key={post._id} post={post} />
        } ))
    }



  


    render(){
        return(
          <div>
            <h2> All Posts </h2>
            {this.allposts()}
          </div>
        
        )
    }
}