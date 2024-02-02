import React, {Component,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../Auth/AuthContext.component';



const Logout = () => {
    const navigate = useNavigate();

    useEffect(()=>{navigate('/')}) //navigate to homepage after logging out 
  

    return <></>; 
  };

 export default class LogOut extends Component{
    static contextType = AuthContext

    componentDidMount(){
        this.context.logout()
    }
    
    render(){

        return(
          <Logout/>
        )
    }
 }


