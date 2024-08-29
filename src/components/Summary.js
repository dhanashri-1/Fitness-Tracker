
import React from "react";
import './Summary.css'; // Add styling for Summary

function Summary() {
  const steps = 5000;
  const calories = 300;
  const waterIntake = 2; // in liters

  return (
    <div className="summary">
      <h3>Today's Summary</h3>
      <p>Steps Taken: {steps}</p>
      <p>Calories Burned: {calories} kcal</p>
      <p>Water Intake: {waterIntake} liters</p>
    </div>
  );
}

export default Summary;
