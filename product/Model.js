const mongoose=require('mongoose')
const schema=mongoose.Schema
const ProductSchema = new schema({

    name:{
        type:String,
        required: true
    },

    imgUrl:{
        type:String

    },

    price:{
        type:Number
    },
    countInStock:{
        type:Number
    }
})

module.exports=Products = mongoose.model('Product', ProductSchema)