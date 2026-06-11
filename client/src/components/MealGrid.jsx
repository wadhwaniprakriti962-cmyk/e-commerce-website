import "./MealGrid.css";
import mealData from "../data/MealData";

const MealGrid = ({ search, selectedTypes, selectedGoals,addToCart,removeFromCart,cart }) => {
  const meals = mealData;

  const filteredMeals = meals.filter((meal) => {
    const matchesSearch = meal.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType =
      selectedTypes.length === 0 ||
      selectedTypes.some((type) =>
        meal.tags.includes(type)
      );

    const matchesGoal =
      selectedGoals.length === 0 ||
      selectedGoals.some((goal) =>
        meal.tags.includes(goal)
      );


    return matchesSearch && matchesType && matchesGoal;
  });

  return (
    <div className="meal-grid">
      {filteredMeals.map((meal) => (
        <div key={meal.id} className="meal-card">
  <img
    src={meal.image}
    alt={meal.name}
    className="meal-image"
  />

  <div className="meal-content">
    <h3>{meal.name}</h3>

    <p className="meal-description">
      {meal.description}
    </p>

    <p className="meal-category">
      {meal.category}
    </p>

    <p className="meal-price">
      ₹{meal.price}
    </p>
    <div className="qty-controls">
  <button onClick={() => removeFromCart(meal)}>-</button>

  <span className="qty">
    {cart.find((item) => item.id === meal.id)?.quantity || 0}
  </span>

  <button onClick={() => addToCart(meal)}>+</button>
</div>
      
    <div className="meal-tags">
      {meal.tags.map((tag) => (
        <span key={tag} className="type-tag">
          {tag.replaceAll("_", " ")}
        </span>
      ))}
    </div>
  </div>
</div>
        
      ))}

      {filteredMeals.length === 0 && <p>No meals found.</p>}
    </div>
  );
};

export default MealGrid;