const mongoose = require("mongoose")
const pschema = mongoose.Schema({
    pname:String,
    pprice:Number,
    pdetails:String,
    pimg:String
});

module.exports=mongoose.model("Product",pschema)