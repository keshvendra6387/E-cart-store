import { products } from "./contants/data.js"
import Product from "./model/product-schema.js"
const DefaultData=async()=>{
    try{
       await Product.insertMany(products);
        console.log("imported success")
    }catch(error){
        console.log("error",error.message)
    }
}
export default DefaultData;