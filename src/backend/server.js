const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose') 

require('dotenv').config(); 

const app = express()
const port = process.env.PORT || 3000;


app.use(cors())  //middleware
app.use(express.json())



const uri = process.env.ATLAS_URI
mongoose.connect(uri, {})

const connection = mongoose.connection
connection.once('open', () => 
{console.log("MongoDB database connected")})

const postsRouter = require('./routes/post')
const usersRouter = require('./routes/user')
const commentRouter = require('./routes/comment')

app.use('/post', postsRouter)
app.use('/user',usersRouter)
app.use('/comment',commentRouter)

app.listen(port,()=>{
    console.log(`server is running on port: ${port}`);
})


