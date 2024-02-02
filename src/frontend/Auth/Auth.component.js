import React,{ Component } from 'react';
import App from '../../App';
import AuthContext from './AuthContext.component';
// Create a context to manage the isLoggedIn state


 class AuthProvider extends Component{

   constructor(props){

    
    super(props)

    this.login=this.login.bind(this)
    this.logout=this.logout.bind(this)

    this.state = {
        isLoggedIn:false,
        user: null
    }

}

login({login_user}){
    this.setState({
        isLoggedIn:true, 
        user: login_user
    },()=>{console.log("user logged in!")} )
}

logout(){
    this.setState({
        isLoggedIn:false, user:null
    }, () => {console.log("logged out")})
}

render(){

    return(
        <AuthContext.Provider value={{ isLoggedIn: this.state.isLoggedIn, login: this.login, logout: this.logout, user:this.state.user}}>
           <App/>
        </AuthContext.Provider>
    )
}

}

export {AuthProvider}