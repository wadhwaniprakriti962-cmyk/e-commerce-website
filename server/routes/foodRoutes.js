const Food=require("../models/foodSchema")
const express=require("express") 
const router=express.Router()
router.get("/foods",async (req,res)=>{
    try{
        const foods=await Food.find();
        res.json(foods)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})
router.post("/foods",async(req,res)=>{
    try{
        await Food.create(req.body)
        res.json({message:"sUCCESS"})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})
module.exports = router;