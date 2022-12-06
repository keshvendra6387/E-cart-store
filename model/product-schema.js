import mongoose from "mongoose";

const product_schema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    url:String,
    detailurl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String
});
const products = mongoose.model('product',product_schema);
export default products;