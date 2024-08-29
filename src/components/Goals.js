import React, { useState } from "react";
import './Goals.css'; // Add styling for Goals

function Goals() {
  const [goal, setGoal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Goal set:", goal);
    setGoal("");
  };

  return (
    <div className="goals">
      <h2>Set Goals</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your goal"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button type="submit">Set Goal</button>
      </form>
    </div>
  );
}

export default Goals;

