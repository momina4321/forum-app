import React, {Component} from 'react';
import AllPosts from './AllPosts.component';


//const Home = () => {
//    const location = useLocation();
//    return <Homepage location = {location} />
//}

export default class Homepage extends Component {


    render(){
                
        return (
            <div>
                <AllPosts />
            </div>
        )
    }
}

