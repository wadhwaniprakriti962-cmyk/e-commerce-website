import { useState } from "react";
import "./Explore.css";

import SearchBar from "../components/SearchBar";
import FoodTypeFilter from "../components/FoodTypeFilter";
import GoalFilter from "../components/GoalFilter";
import MealGrid from "../components/MealGrid";

const Explore = ({ cart, addToCart, removeFromCart }) => {
  const [search, setSearch] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedGoals, setSelectedGoals] = useState([]);
const [toast, setToast] = useState("");
const showToast = (msg) => {
  setToast(msg);
  setTimeout(() => setToast(""), 2000);
};


  return (
    <div className="explore-page">

      <div className="explore-header">
        <h1>Explore Healthy Meals</h1>
        <p>
          Discover nutritious meals tailored to your lifestyle
        </p>
      </div>
      {toast && <div className="toast">{toast}</div>}

      <SearchBar
        search={search}
        setSearch={setSearch}
      />
                <div className="cart-indicator">
  🛒 Cart Items: {cart.length}
</div>
      <div className="filter-section">

        <div className="filter-cards">
          <h3>Food Types</h3>

          <FoodTypeFilter
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
        </div>

        <div className="filter-cards">
          <h3>Goals</h3>

          <GoalFilter
            selectedGoals={selectedGoals}
            setSelectedGoals={setSelectedGoals}
          />
        </div>

      </div>

      <MealGrid
        search={search}
        selectedTypes={selectedTypes}
        selectedGoals={selectedGoals}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        cart={cart}
      />

    </div>
  );
};

export default Explore;