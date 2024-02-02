import React, {Component, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import withAuth from '../Auth/authwrapped.component';
import AuthContext from '../Auth/AuthContext.component';

const NavigateComponent = () => {

    const navigate = useNavigate();

    useEffect(()=>{navigate('/') } , [navigate] )
  

    return <></>; // This component doesn't render anything, it's just for the hook
  };

 class Signup extends Component {

    static contextType = AuthContext

   constructor (props) {
    super(props);

    this.onChangeUsername=this.onChangeUsername.bind(this);
    this.onChangePassword=this.onChangePassword.bind(this);
    this.onChangeEmail=this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    this.state={
        username: '',
        password:'',
        email: '',
    }
   }
   
   onChangeUsername(e){
    this.setState({username: e.target.value});
   }

   onChangeEmail(e){
    this.setState({email: e.target.value});
   }

   onChangePassword(e){
    this.setState({password: e.target.value});
   }

   


  async onSubmit (e){
    e.preventDefault();

    const user = {
        username:this.state.username,
        email: this.state.email,
        password: this.state.password,
    }


    try{
       await axios.post('http://localhost:3000/user/signup',user) //add the user to database 
        this.context.login({user}) //set isloggedin to true and set the username to current user 

    
    }
    catch(error){
       console.log(error)
    }
    
   

   }
  
   
    render(){
        return (
      
           
            <div>

            <h2>Sign Up</h2>
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <label>Username:</label>
                <input className='form-control' required type="text" value={this.state.username} onChange={this.onChangeUsername} />
                </div>
                <div className='form-group'>
                <label>Email:</label>
                <input type='email' className='form-control' required value={this.state.email} onChange={this.onChangeEmail} />
               </div>
               <div className='form-group'>
                <label>Password:</label>
                <input className='form-control' type='password' required value={this.state.password} onChange={this.onChangePassword} />
               </div>
                <div className='form-group'>
                <input type="submit" value="Sign Up" className='btn btn-primary' onSubmit={this.onSubmit}/>
                { this.context.isLoggedIn && < NavigateComponent />}
                </div>
                
            </form>
        </div>

        )
    }
}

export default Signup