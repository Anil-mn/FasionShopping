const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name :
    {
       type: String,
       required: true
    },
    price :
    {
        type : String,
        required: true
    },
    discription : {
        type : String
    },
    image : {
        type: String,
        default: "https://learncodeonline.in/manicon.png"
    },
    category: {
        type : String,
        required : true
    }

})

module.exports = Products = mongoose.model("Products", ProductSchema);