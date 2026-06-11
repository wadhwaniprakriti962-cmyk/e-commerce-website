const mongoose=require("mongoose")

const foodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:[
            "Breakfast",
            "Lunch",
            "Dinner"
        ]
    },
    price:{
        type:Number,
        required:true
    },
  tags: {
  type: [String],
  enum: [
    "vegan",
    "vegetarian",
    "non_veg",
    "satvik",
    "jain",
    "high_protein",
    "weight_loss",
    "weight_gain",
    "low_calorie",
    "gym_meal",
    "fasting_food"
  ]
}
})
const Food=mongoose.model("Food",foodSchema)
module.exports=Food;