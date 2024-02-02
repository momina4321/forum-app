import React, {Component,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Auth/AuthContext.component';


const NavigateComponent = () => {
    const navigate = useNavigate();

    useEffect(()=>{navigate('/') } , [navigate] )
  

    return <></>; // This component doesn't render anything, it's just for the hook
  };


 class Login extends Component {
  static contextType = AuthContext


  constructor(props){

    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit=this.onSubmit.bind(this)
    
    this.state={
        username: '',
        password:'',
        error:''    }
  }

  

  onChangeUsername(e){
    this.setState({username: e.target.value});
  }

  onChangePassword(e){
    this.setState({password: e.target.value});
  }



 async onSubmit(e){
    e.preventDefault();
    
   

    const user ={
        
        username:this.state.username,
        password: this.state.password
    }
   try{

     await axios.post('http://localhost:3000/user/login',user)
         this.setState({error:""}, () => {

          
         this.context.login({login_user:user}) ;  //set isLoggedIn to true
           })

      //wait for the response if response is ok error is null if response is bad then throw an error
     
    }
    catch(error){
        this.setState({ error: 'Invalid username or password' });

    }

  }



    render(){

      
        return (
           
              
            <div>
            <h2>Log In</h2>
            <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <label>Username:</label>
                <input className='form-control' required type="text" value={this.state.username} onChange={this.onChangeUsername} />
                </div>
               <div className='form-group'>
                <label>Password:</label>
                <input className='form-control' type='password' required value={this.state.password} onChange={this.onChangePassword} />
               </div>   
               <div className='form-group'>
                <input type="submit" value="Log In" className='btn btn-primary'  onSubmit={this.onSubmit}/>
                                                                                                                  
                {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}
                { this.context.isLoggedIn && <NavigateComponent  /> }
                


                </div>
            </form>
            </div>
    
        )
    }
}

export default Login;