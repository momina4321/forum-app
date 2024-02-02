let User = require('../models/user.model')
const jwt = require('jsonwebtoken')


//add user to the database 
const addUser = async (req,res) =>{

        //define fields 
         const username = req.body.username
         const email = req.body.email
         const password = req.body.password
         let newuser = new User({username, email, password})   //create an instance of user 
         newuser.save() // save to db
         .then(()=> {res.json({token:tokengenerator(newuser._id)}) }) //send a json response to tell that user is created    
         .catch(err => res.status(400).json( 'Error: ' +err )) // if user is not created send error 

}


const login = async (req,res) => {
    const {username, password} = req.body;

    const user = await User.findOne({ username}) //find the user using the username

    
    if (user &&  password==user.password){ //validating username and password

        res.status(200).json({  //send json response
           username:user.username,
           email:user.email,
           password:user.password,
           token:tokengenerator(user._id),
        })

    }
    else{
        res.status(400).json("invalid credentials")
    }
}

//view user profile
const viewUser = async (req,res) =>{
    const username = req.params.username;
    const user = await User.findOne({username})
    if (user){
       return res.status(200).json(user)//send the user as json response 

    }
    else{
        res.status(400).json("user not found")
    }
  //  User.findById(userId).then(user => res.json(user))
  //  .catch(err=>res.status(400).json("error: "+err));
}

const tokengenerator = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET ,
        {expiresIn: '30d'}
        )
}


//view All Users
const viewAllUsers =  async(req,res) =>{
       User.find().then(users => res.json(users)).catch(err => res.status(400).json('Error'+err))
}


module.exports = {addUser,login,viewUser,viewAllUsers};