const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paperSchema = new Schema({
          
    heading :{
        type : String,
        required : true

    },
    email :{
        type : String,
        required : true
    },
    video :{
        type : String,
        required :true
    }
    
})

module.exports = paper = mongoose.model('paper',paperSchema)