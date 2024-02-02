import {createContext} from "react";



const AuthContext = createContext({
    isLoggedIn: false,
    user: null,
    login: (user) => {},
    logout: () => {}

});


export default AuthContext