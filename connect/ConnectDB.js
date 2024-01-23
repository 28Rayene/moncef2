const mongoose = require('mongoose');

require('dotenv').config({path:'./connect/.env'})

const ConnectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('mongoose connected')
    }
    catch(error){
        console.log(error)
    }
    
}
module.exports=ConnectDB