import React, {Component} from 'react';
import axios from 'axios';
//import withAuth from '../Auth/authwrapped.component';
import AuthContext from '../Auth/AuthContext.component';
//for creating a post 
 class Post extends Component {

    static contextType = AuthContext

   constructor (props) {
    super(props);

    this.onChangeTitle=this.onChangeTitle.bind(this);
    this.onChangeContent=this.onChangeContent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state={
        title: '',
        content:'',
        author:null
    }
   }
   
   onChangeTitle(e){
    this.setState({title: e.target.value});
   }

   onChangeContent(e){
    this.setState({content: e.target.value});
   }


    componentDidMount(){
    if (this.context.isLoggedIn){axios.get(`http://localhost:3000/user/${this.context.user.username}`).then(
    response => this.setState({
        author: response.data._id
     })
     ).catch((error)=> console.log(error));
      }
      else{
        console.log("user not logged in")
      }
     

   }

   onSubmit (e){
    e.preventDefault();
    const post = {
        title:this.state.title,
        content: this.state.content,
        author: this.state.author
    }

    axios.post('http://localhost:3000/post/add',post)
    .then(res => console.log(res.data));

    this.setState({
        title:'',
        content:'',
        author:null
    })

   }

    render(){
        return (
              

                 <div>
        
            { this.context.isLoggedIn ? (
            <>
            <h2>Create Forum Thread</h2>
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <label>Title:</label>
                <input className='form-control' required type="text" value={this.state.title} onChange={this.onChangeTitle} />
                </div>
                <div className='form-group'>
                <label>Content:</label>
                <textarea className='form-control' required value={this.state.content} onChange={this.onChangeContent} />
               </div>
                <div className='form-group'>
                <input type="submit" value="Create Thread" className='btn btn-primary' onSubmit={this.onSubmit}/>
                </div>
                
                </form></>) :(<p style={{ color: 'red' }}>You must be logged in</p>)
            }
            </div>

        )
    }
}

export default Post