import React from 'react';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import './App.css';
import NavBar from './frontend/Components/Navbar.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./frontend/Components/Signup.component";
import Login from "./frontend/Components/Login.component";
import Post from './frontend/Components/Post.component';
import Homepage from './frontend/Components/Homepage.component';
import LogOut from './frontend/Components/Logout.component';
import Comment from './frontend/Components/Comment.component';

function App() {

  


  return (

    <Router>
      <div className='container'>
     <NavBar /> 
    <Routes>
    <Route path ="/"  Component={Homepage  }/>
    <Route path='/post/add'  Component = {Post } />
    <Route path ="/user/signup"  Component={Signup}/>
    <Route path ="/user/login"  Component={Login}/>
    <Route path="/logout" Component={LogOut} />
</Routes>
</div>
    </Router>
  );
}

export default App;
