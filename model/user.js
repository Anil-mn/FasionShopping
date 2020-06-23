const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
       name :{
           type : String,
           required: true
       },
       phone:{
           type: Number,
           required: true
       },
       password: {
        type: String,
        required: true
      },
       email: {
           type: String,
           required: true
       },
       gender: {
           type: String,

       },
       dob:{
           type: Date,
          
       },
       date: {
        type: Date,
        default: Date.now
      },
      profilepic: {
        type: String,
        default: "https://learncodeonline.in/manicon.png"
      },
    }
)
module.exports = User = mongoose.model("User", UserSchema);