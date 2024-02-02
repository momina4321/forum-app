const moongoose = require('mongoose');
const Schema = mongoose.Schema;


const moderatorSchema = new Schema({
    name:{
        type:String
    }
})

const Moderator = mongoose.model('Moderator', moderatorSchema);

module.exports = Moderator;
