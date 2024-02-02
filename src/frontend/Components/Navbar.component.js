import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//import withAuth from '../Auth/authwrapped.component';
import AuthContext from '../Auth/AuthContext.component';



 class Navbar extends Component {
    
  static contextType = AuthContext

    constructor(props){
        super(props);

        this.state={
            username:  null,

        }
    }

 

    render(){
        

        return (


           <div className='navbar navbar-dark bg-dark navbar-expand-lg'>
                    <Link to="/" className='navbar-brand'>Forum</Link>
          <div className='collapse navbar-collapse'>
              <ul className='navbar-nav nr-auto'>
                <li className='navbar-item'>
                    <Link to="/post/add" className='nav-link' >Start a Discussion</Link>
                </li>
                
                { this.context.isLoggedIn ? (
 
<>
    <li className='navbar-item'>
      <Link className='nav-link'> {this.context.user.username} </Link>
    </li>
    <li className='navbar-item' >
    <Link to='/logout' className='nav-link'>Log Out</Link>

    </li>
    
    </>
 
) : (
     <>
         <li className='navbar-item'>
      <Link to="/user/signup" className='nav-link' >Sign Up</Link>
    </li>
  <li className='navbar-item'>
    <Link to="/user/login" className='nav-link'>Log In</Link>
  </li>
  </>
)}

              </ul>
          </div>
          
           </div>


        )
    }
}

export default Navbar