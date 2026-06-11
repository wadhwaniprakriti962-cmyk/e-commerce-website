import "./GoalFilter.css";

const GoalFilter = ({ selectedGoals, setSelectedGoals }) => {
  const goals = [
    "high_protein",
    "weight_loss",
    "weight_gain",
    "low_calorie",
    "gym_meal",
    "fasting_food"
  ];
  

  const toggleGoal = (goal) => {
    setSelectedGoals((prev) =>
      prev.includes(goal)
        ? prev.filter((item) => item !== goal)
        : [...prev, goal]
    );
  };

  return (
    <div className="goal-container">
      {goals.map((goal) => (
        <button
          key={goal}
          className={
            selectedGoals.includes(goal)
              ? "goal-chip active"
              : "goal-chip"
          }
          onClick={() => toggleGoal(goal)}
        >
          {goal.replaceAll("_", " ")}
        </button>
      ))}
    </div>
  );
};

export default GoalFilter;