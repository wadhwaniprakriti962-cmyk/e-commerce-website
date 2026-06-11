const mongoose=require("mongoose")
userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
         type:String,
         required:true,
         unique:true
    },
    password:{
         type:String,
         required:true
    },
    location:{
        type:String,
        required:true
    },
    preferences: {
    type: [String],
    enum: [
    "vegan",
    "high_protein",
    "gym_meal",
    "weight_loss",
    "weight_gain",
    "fasting_food",
    "low_calorie"
  ]
}
})
const User = mongoose.model("User", userSchema)

module.exports = User