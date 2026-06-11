const mealData = [
{
id: 1,
name: "Chicken Rice Bowl",
image: "/images/chicken-rice-bowl.webp",
description: "Grilled chicken served with brown rice and vegetables.",
category: "Lunch",
price: 249,
tags: ["non_veg", "high_protein", "gym_meal"]
},
{
id: 2,
name: "Protein Omelette",
image: "/images/protein-omelette.jpg",
description: "Egg white omelette packed with protein.",
category: "Breakfast",
price: 179,
tags: ["non_veg", "high_protein", "gym_meal"]
},
{
id: 3,
name: "Paneer Power Bowl",
image: "/images/paneer-power-bowl.webp",
description: "Protein-rich paneer with fresh vegetables.",
category: "Lunch",
price: 229,
tags: ["vegetarian", "high_protein", "gym_meal"]
},
{
id: 4,
name: "Veg Salad",
image: "/images/veg-salad.avif",
description: "Fresh vegetables with light dressing.",
category: "Lunch",
price: 199,
tags: ["vegan", "weight_loss", "low_calorie"]
},
{
id: 5,
name: "Quinoa Salad",
image: "/images/quinoa-salad.webp",
description: "Healthy quinoa mixed with vegetables.",
category: "Lunch",
price: 219,
tags: ["vegan", "weight_loss", "low_calorie"]
},
{
id: 6,
name: "Fruit Bowl",
image: "/images/fruit-bowl.jpg",
description: "Seasonal fruits packed with nutrients.",
category: "Breakfast",
price: 149,
tags: ["vegan", "low_calorie", "weight_loss"]
},
{
id: 7,
name: "Oats Smoothie",
image: "/images/oats-smoothie.jpg",
description: "Energy-packed smoothie with oats and banana.",
category: "Breakfast",
price: 149,
tags: ["vegetarian", "gym_meal"]
},
{
id: 8,
name: "Peanut Butter Toast",
image: "/images/pb-toast.jpg",
description: "Whole wheat toast with peanut butter.",
category: "Breakfast",
price: 129,
tags: ["vegetarian", "weight_gain"]
},
{
id: 9,
name: "Banana Shake",
image: "/images/banana-shake.jpg",
description: "Banana shake for energy and muscle gain.",
category: "Breakfast",
price: 139,
tags: ["vegetarian", "weight_gain"]
},
{
id: 10,
name: "Chicken Wrap",
image: "/images/chicken-wrap.jpg",
description: "Whole wheat wrap stuffed with grilled chicken.",
category: "Lunch",
price: 229,
tags: ["non_veg", "high_protein"]
},
{
id: 11,
name: "Paneer Wrap",
image: "/images/paneer-wrap.jpg",
description: "Soft wrap filled with spicy paneer.",
category: "Lunch",
price: 209,
tags: ["vegetarian", "high_protein"]
},
{
id: 12,
name: "Satvik Thali",
image: "/images/satvik-thali.avif",
description: "Traditional satvik meal without onion and garlic.",
category: "Dinner",
price: 299,
tags: ["satvik", "fasting_food"]
},
{
id: 13,
name: "Sabudana Khichdi",
image: "/images/sabudana-khichdi.webp",
description: "Popular fasting meal made with tapioca pearls.",
category: "Breakfast",
price: 159,
tags: ["satvik", "fasting_food"]
},
{
id: 14,
name: "Tofu Stir Fry",
image: "/images/tofu-stir-fry.jpg",
description: "Tofu cooked with vegetables and herbs.",
category: "Dinner",
price: 239,
tags: ["vegan", "high_protein"]
},
{
id: 15,
name: "Buddha Bowl",
image: "/images/buddha-bowl.jpg",
description: "Balanced bowl with grains and vegetables.",
category: "Lunch",
price: 249,
tags: ["vegan", "low_calorie"]
},
{
id: 16,
name: "Greek Yogurt Bowl",
image: "/images/greek-yogurt.jpg",
description: "Greek yogurt topped with fruits and nuts.",
category: "Breakfast",
price: 189,
tags: ["vegetarian", "high_protein"]
},
{
id: 17,
name: "Mexican Veg Wrap",
image: "/images/mexican-wrap.avif",
description: "Spicy Mexican-style vegetable wrap.",
category: "Lunch",
price: 219,
tags: ["vegetarian", "weight_gain"]
},
{
id: 18,
name: "Falafel Wrap",
image: "/images/falafel-wrap.jpg",
description: "Falafel stuffed in pita with vegetables.",
category: "Lunch",
price: 229,
tags: ["vegan", "high_protein"]
},
{
id: 19,
name: "Brown Rice Khichdi",
image: "/images/brown-rice-khichdi.webp",
description: "Nutritious brown rice khichdi.",
category: "Dinner",
price: 199,
tags: ["vegetarian", "low_calorie"]
},
{
id: 20,
name: "Grilled Fish Meal",
image: "/images/grilled-fish.jpg",
description: "Grilled fish served with vegetables.",
category: "Dinner",
price: 329,
tags: ["non_veg", "high_protein", "gym_meal"]
},{
id: 21,
name: "Avocado Toast",
image: "/images/avocado-toast.jpg",
description: "Whole grain toast topped with avocado.",
category: "Breakfast",
price: 199,
tags: ["vegan", "low_calorie"]
},
{
id: 22,
name: "Muesli Bowl",
image: "/images/muesli-bowl.webp",
description: "Healthy muesli with nuts and fruits.",
category: "Breakfast",
price: 179,
tags: ["vegetarian", "weight_loss"]
},
{
id: 23,
name: "Chickpea Salad",
image: "/images/chickpea-salad.jpg",
description: "Protein-rich chickpeas with fresh veggies.",
category: "Lunch",
price: 209,
tags: ["vegan", "high_protein"]
},
{
id: 24,
name: "Rajma Rice",
image: "/images/rajma-rice.jpg",
description: "Classic rajma served with rice.",
category: "Lunch",
price: 229,
tags: ["vegetarian", "weight_gain"]
},
{
id: 25,
name: "Dal Khichdi",
image: "/images/dal-khichdi.avif",
description: "Comforting lentil and rice meal.",
category: "Dinner",
price: 199,
tags: ["vegetarian", "low_calorie"]
},
{
id: 26,
name: "Tofu Buddha Bowl",
image: "/images/tofu-buddha-bowl.jpg",
description: "Balanced bowl with tofu and veggies.",
category: "Lunch",
price: 249,
tags: ["vegan", "high_protein"]
},
{
id: 27,
name: "Chicken Caesar Salad",
image: "/images/chicken-caesar.webp",
description: "Fresh salad topped with grilled chicken.",
category: "Lunch",
price: 269,
tags: ["non_veg", "high_protein"]
},
{
id: 28,
name: "Egg Sandwich",
image: "/images/egg-sandwich.webp",
description: "Healthy egg sandwich on whole wheat bread.",
category: "Breakfast",
price: 149,
tags: ["non_veg", "gym_meal"]
},
{
id: 29,
name: "Paneer Tikka",
image: "/images/paneer-tikka.webp",
description: "Grilled paneer cubes with spices.",
category: "Dinner",
price: 249,
tags: ["vegetarian", "high_protein"]
},
{
id: 30,
name: "Moong Dal Chilla",
image: "/images/moong-chilla.jpg",
description: "Protein-rich lentil pancakes.",
category: "Breakfast",
price: 159,
tags: ["vegetarian", "high_protein"]
},
{
id: 31,
name: "Sweet Potato Bowl",
image: "/images/sweet-potato-bowl.jpg",
description: "Roasted sweet potatoes with vegetables.",
category: "Lunch",
price: 219,
tags: ["vegan", "weight_loss"]
},
{
id: 32,
name: "Grilled Chicken Breast",
image: "/images/grilled-chicken-breast.jpg",
description: "Lean grilled chicken for fitness goals.",
category: "Dinner",
price: 299,
tags: ["non_veg", "high_protein", "gym_meal"]
},
{
id: 33,
name: "Vegetable Soup",
image: "/images/vegetable-soup.jpg",
description: "Light and nutritious soup.",
category: "Dinner",
price: 149,
tags: ["vegan", "low_calorie"]
},
{
id: 34,
name: "Poha",
image: "/images/poha.jpg",
description: "Traditional Indian breakfast.",
category: "Breakfast",
price: 119,
tags: ["vegetarian", "low_calorie"]
},
{
id: 35,
name: "Sprouts Salad",
image: "/images/sprouts-salad.jpg",
description: "Healthy sprouts with lemon dressing.",
category: "Breakfast",
price: 139,
tags: ["vegan", "high_protein"]
},
{
id: 36,
name: "Fish Curry Rice",
image: "/images/fish-curry-rice.jpg",
description: "Traditional fish curry with rice.",
category: "Lunch",
price: 319,
tags: ["non_veg", "weight_gain"]
},
{
id: 37,
name: "Falafel Bowl",
image: "/images/falafel-bowl.jpg",
description: "Middle Eastern falafel with veggies.",
category: "Lunch",
price: 249,
tags: ["vegan", "high_protein"]
},
{
id: 38,
name: "Masala Oats",
image: "/images/masala-oats.jpg",
description: "Healthy oats cooked with vegetables.",
category: "Breakfast",
price: 139,
tags: ["vegetarian", "weight_loss"]
},
{
id: 39,
name: "Chicken Stir Fry",
image: "/images/chicken-stir-fry.jpg",
description: "Chicken cooked with fresh vegetables.",
category: "Dinner",
price: 289,
tags: ["non_veg", "gym_meal"]
},
{
id: 40,
name: "Fruit Smoothie Bowl",
image: "/images/smoothie-bowl.jpg",
description: "Colorful smoothie bowl with fruits.",
category: "Breakfast",
price: 189,
tags: ["vegan", "low_calorie"]
},{
  id: 41,
  name: "Jain Vegetable Pulao",
  image: "/images/jain-pulao.jpg",
  description: "Flavorful pulao prepared without onion and garlic.",
  category: "Lunch",
  price: 229,
  tags: ["jain", "vegetarian"]
},
{
  id: 42,
  name: "Jain Paneer Curry",
  image: "/images/jain-paneer.jpg",
  description: "Paneer curry made without onion and garlic.",
  category: "Dinner",
  price: 259,
  tags: ["jain", "high_protein", "vegetarian"]
},
{
  id: 43,
  name: "Jain Khichdi",
  image: "/images/jain-khichdi.avif",
  description: "Light and nutritious khichdi suitable for Jain diet.",
  category: "Dinner",
  price: 189,
  tags: ["jain", "low_calorie"]
},
{
  id: 44,
  name: "Jain Dal Rice",
  image: "/images/jain-dal-rice.jpg",
  description: "Simple dal rice without onion and garlic.",
  category: "Lunch",
  price: 199,
  tags: ["jain", "vegetarian"]
},
{
  id: 45,
  name: "Jain Veg Wrap",
  image: "/images/jain-wrap.avif",
  description: "Healthy wrap with Jain-friendly vegetables.",
  category: "Lunch",
  price: 219,
  tags: ["jain", "weight_loss"]
}
];

export default mealData;
