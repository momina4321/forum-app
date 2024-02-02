import React, {Component} from 'react';
import AuthContext from '../Auth/AuthContext.component';
import axios from 'axios';


export default class Comment extends Component {

    static contextType = AuthContext

    constructor(props){
        super(props);

        this.onChangeContent = this.onChangeContent.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            content:"",
            userid: null
        }
    }

    onChangeContent(e){
        this.setState({content : e.target.value});
    }

   async onSubmit(e){
        e.preventDefault();
        if (this.context.isLoggedIn){

            const comment = {
            content: this.state.content,
            userid: this.state.userid  //userobject id 
        }

        try{
//            console.log(this.props.postid)
               await axios.post(`http://localhost:3000/comment/${this.props.postid}`, comment) //add the comment to the schema
               this.setState({
                content:"",
                author:null
               }) 
        }
        catch(error){
            console.log(error)
        }

        }  //if statement ends 
        else {
            alert("You must be logged in to post a comment")
        }
        

    }
    
    componentDidMount(){  //get user details from url
        if (this.context.isLoggedIn){axios.get(`http://localhost:3000/user/${this.context.user.username}`).then(
        response => this.setState({
            userid: response.data._id 
         })
         ).catch((error)=> console.log(error));
          }
          else{

          }
    
       }

    render(){
        return (
           <div>
            <form onSubmit={this.onSubmit}>
               <div className='form-group'>
                <label>Comment:</label>
                <input className='form-control' type='text' required value={this.state.content} onChange={this.onChangeContent} />
               </div>   
               <div className='form-group'>
                <input type="submit" value="Add Comment" className='btn btn-primary' onSubmit={this.onSubmit}/>
                                                                                                                                  
                </div>
            </form>
            </div>
        )
    }
}