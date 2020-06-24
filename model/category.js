var mongoose = require("mongoose");


const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name : {
        type : String
    },
    subcategory :{
        type : String
    }
},
{ timestamps: true })

module.exports = Categoery = mongoose.model("Categoery", categorySchema);