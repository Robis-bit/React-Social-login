const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    username:String,
    googleId:String,
   profilePhoto: String,
    firstName: String,
    lastName: String,
    lastVisited: {
        type: Date,
        default: new Date(),
      },

});

const User=mongoose.model('user',userSchema)

module.exports=User