import "./Home.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import mealData from "../data/MealData";
import {
  GiLeafSkeleton,
  GiMuscleUp,
  GiGarlic,
  GiFruitBowl
} from "react-icons/gi";
import { FiGift } from "react-icons/fi";
import { MdSpa } from "react-icons/md";
import heroImg from "../assets/magnific__premium-modern-hero-artwork-for-nutrigo-large-vivi__67317-removebg-preview.png";
import { FiShoppingCart } from "react-icons/fi";
function Home({user,cart,addToCart}){
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
const [selectedFilter, setSelectedFilter] = useState("All");
const featuredMeals = mealData.filter((meal) =>
  [1, 4, 12, 41].includes(meal.id)
);
const displayedMeals =
  search.trim() === ""
    ? featuredMeals.filter(
        (meal) =>
          selectedFilter === "All" ||
          meal.tags?.includes(selectedFilter)
      )
    : mealData.filter(
        (meal) =>
          meal.name.toLowerCase().includes(search.toLowerCase()) &&
          (selectedFilter === "All" ||
            meal.tags?.includes(selectedFilter))
      );
     

    return (
      <div>
        <main>
          <section className="hero-section">
            <div className="hero-left">
              <div className="welcome-block">
                <p>Hey</p>
                <h2>{user ? user.name : "Guest"}</h2>
                <h1>Healthy Food,</h1>
                <h1 className="accent">Delivered Fresh </h1>
              </div>
              <div className="search-block">
                <input
                  type="text"
                  placeholder="🔍 Search for food, drinks, or cravings..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <div className="order-block">
                <button onClick={() => navigate("/explore")}>
                  Order Now
                </button>
              </div>
            </div>
            <div className="offer-banner">
            <div className="offer-content">
            <span className="offer-tag">🔥 LIMITED OFFER</span>
            <h3>FLAT 40% OFF</h3>
            <p>On your first order • Use code NUTRI40</p>
            <FiGift className="gift-icon" />
           </div>
          <button className="offerBtn">Claim Now</button>
         </div>
            <div className="hero-right">
              <div className="illustration-block">
                  <img src={heroImg} alt="Healthy Food Illustration" />
                </div>
              </div>
          </section>
          <section className="filters-section">
           <h2>Choose Your Preference</h2>
           <p className="filter-subtitle">
                 Personalize your meals based on your dietary preferences.
            </p>
            <div className="preference-container">
               <div
    className="preference-card"
    onClick={() => setSelectedFilter("All")}
  >
    <span>All</span>
  </div>
            <div className="preference-card vegan"  onClick={() => setSelectedFilter("vegan")}>
            <GiLeafSkeleton size={28} />
            <span>Vegan</span>
            </div>

           <div
          className="preference-card protein" onClick={() => setSelectedFilter("high_protein")}>
           <GiMuscleUp size={28}/>
           <span>High Protein</span>
           </div>
           
           <div
           className="preference-card garlic" onClick={() => setSelectedFilter("satvik")}>
           <GiGarlic size={28}/>
           <span>Satvik</span>
           </div>
           
           <div
           className="preference-card jain" onClick={() => setSelectedFilter("jain")}>
           <MdSpa size={28}/>
           <span>Jain</span>
           </div>
           
           <div
           className="preference-card meal" onClick={() => setSelectedFilter("low_calorie")}>
           <GiFruitBowl size={28} />
           <span>Light Meal</span>
           </div>
           </div>
      
          </section>
          <section className="featured-section">
            <div className="featured-heading">
             <h2>
  {search.trim() ? "Search Results" : "Featured Meals"}
</h2>
              <p>Freshly prepared, nutritious, and delicious.</p>
            </div>
            <div className="meal-cards">
  {displayedMeals.length > 0 ? (
    displayedMeals.map((meal) => (
      <div className="meal-card" key={meal.id}>
        <img src={meal.image} alt={meal.name} />

        <h3>{meal.name}</h3>

        <p>{meal.description}</p>

        <div className="meal-footer">
          <span>₹{meal.price}</span>

        <button className= "cart-btn" onClick={() => addToCart(meal)}>
         <FiShoppingCart/>
         <span>Add</span>
        </button>
      </div>
        </div>
    ))
  ) : (
    <h3>No meals found</h3>
  )}
</div>  
          </section>

            
      
        </main>
      </div>
    );
}
export default Home;