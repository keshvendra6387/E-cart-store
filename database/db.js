import mongoose from "mongoose";
const Connection=async(URL)=>{
  
    try{
       await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser: true})
       console.log("connected successfully")
    }
    catch(error){
        console.log('error while creating',error.message)
    }
}
export default Connection;