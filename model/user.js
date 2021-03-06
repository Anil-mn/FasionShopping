var mongoose = require("mongoose");
const crypto = require("crypto");
const { v4: uuidv4 } = require('uuid');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            maxlength: 32,
            trim: true
          },
          lastname: {
            type: String,
            maxlength: 32,
            trim: true
          },
          email: {
            type: String,
            trim: true,
            required: true,
            unique: true
          },
          userinfo: {
            type: String,
            trim: true
          },
       phone:{
           type: Number,
           required: true
       },
       encry_password: {
        type: String,
        required: true
      },
      salt: String,
      role: {
        type: Number,
        default: 0
      },
      purchases: {
        type: Array,
        default: []
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
      
    },
    { timestamps: true }
);

// password encyption
UserSchema
.virtual("password")
.set(function(password){
    this._password = password;
    this.salt = uuidv4();
    this.encry_password = this.securePassword(password);
})
.get(function() {
    return this._password;
  });

UserSchema.methods = {
    autheticate: function(plainpassword) {
        return this.securePassword(plainpassword) === this.encry_password;
      },
    
      securePassword: function(plainpassword) {
        if (!plainpassword) return "";
        try {
          return crypto
            .createHmac("sha256", this.salt)
            .update(plainpassword)
            .digest("hex");
        } catch (err) {
          return "";
        }
      }
}
module.exports = User = mongoose.model("User", UserSchema);