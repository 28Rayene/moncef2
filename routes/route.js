const express=require('express')
const router=express.Router()
const Product=require('../product/Model')
//post route
router.post("/add",async(req,res)=>{
    const{name,imgURL,price,countInStock}=req.body
    try{
        const newproduct=new Product({name,imgURL,price,countInStock})
        const product=await newproduct.save()
        res.send({msg:'product added',product})
    }
    catch(error){
        console.log(error)
    }
    router.get('/',async(req,res)=>{
        try{
            const products= await Product.find()
            res.send({msg:'data fetched',products})
        }
        catch(error){
            console.log(error)
        }
    })
})
//edit
router.put('/edit/:id',async(req,res)=>{
    const {id}=req.params
    try{
        const product=await Product.findOneAndUpdate({_id:id},{$set:req.body})
        res.send({msg:"updated"})
    }
    catch(error){
        console.log(error)
    }
})
router.delete('/delete/:id',async(req,res)=>{
    const {id}=req.params
    try{
        const product=await Product.findOneAndDelete({_id:id})
        res.send({msg:"deleted"})
    }
    catch(error){
        console.log(error)
    }
})

module.exports=router