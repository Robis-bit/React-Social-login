const mongoose= require("mongoose");



const  connectToMongoo  = async()=>{
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.ATLAS_URI,()=>{
        console.log("mogo is successfully connect");
    })
}

module.exports=connectToMongoo;