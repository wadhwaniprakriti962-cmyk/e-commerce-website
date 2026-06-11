const express=require("express")
const bcrypt=require("bcryptjs")
const User=require("../models/userSchema")
const Food = require("../models/foodSchema")
const jwt = require("jsonwebtoken")
const authMiddleware = require("../middleware/authMiddleware")
const router=express.Router()
router.post('/register',async(req,res)=>{
    try{
       const user=req.body
       const existingUser=await User.findOne({email:user.email})
       if (existingUser){
        return res.json({message:"User already exists"})
       }
       const hashedPassword=await bcrypt.hash(user.password,10)
       await User.create({
        name:user.name,
        email:user.email,
        password:hashedPassword,
        location:user.location,
        preferences:user.preferences
       })
       return res.json({message:"User registered successfully"})
       }
    catch(error){
        res.status(500).json({message:error.message})
    }
})
router.post("/login", async (req, res) => {
    try {

        const user = req.body

        const existingUser = await User.findOne({
            email: user.email
        })

        if (!existingUser) {
            return res.json({
                message: "Unable to login...User not found"
            })
        }

        const isMatch = await bcrypt.compare(
            user.password,
            existingUser.password
        )

        if (!isMatch) {
            return res.json({
                message: "Invalid password"
            })
        }

        const token = jwt.sign(
            { id: existingUser._id },
            process.env.JWT_SECRET
        )

        res.json({
            message: "Login successful",
            token
        })

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
})
router.get('/foods/preferences/',authMiddleware,async(req,res)=>{
    try{
       const user = await User.findById(req.user.id)
       const preferences=user.preferences
       if (!user) {
       return res.json({ message: "User not found" })
       }
       const match=await Food.find({tags:{$in:preferences}})
       res.json(match)
    }catch(error){
        res.json({message:error.message})
    }
})
module.exports=router;