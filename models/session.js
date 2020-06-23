const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema (
    {
        name :{
            type : String,
            required : true
        },
        subName :{
            type : String,
            required : true
        },
        image :{
            type : String,
            required : true
        }
    }
)
module.exports = session = mongoose.model('session',sessionSchema)