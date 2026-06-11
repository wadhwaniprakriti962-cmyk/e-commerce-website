import "./FoodTypeFilter.css";

const FoodTypeFilter = ({ selectedTypes, setSelectedTypes }) => {
  const foodTypes = [
  "vegan",
  "vegetarian",
  "non_veg",
  "satvik",
  "jain"
];

  const toggleType = (type) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  };

  return (
    <div className="foodtype-container">
      {foodTypes.map((type) => (
        <button
          key={type}
          className={
            selectedTypes.includes(type)
              ? "foodtype-chip active"
              : "foodtype-chip"
          }
          onClick={() => toggleType(type)}
        >
          {type.replace("_", " ")}
        </button>
      ))}
    </div>
  );
};

export default FoodTypeFilter;