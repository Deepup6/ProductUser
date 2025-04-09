var mongoose = require('mongoose');
var productSchema = mongoose.Schema({
    pname:String,
    pQuantity:String,
    pPrice:Number,
    pBrand:String
})
var productmodel = mongoose.model("product",productSchema);
module.exports = productmodel;