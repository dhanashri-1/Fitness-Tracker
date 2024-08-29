import React from "react";
import './WorkoutList.css'; // Add styling for WorkoutList

function WorkoutList({ workouts }) {
  return (
    <div className="workout-list">
      <h2>Workout History</h2>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            {workout.exercise} - {workout.reps} reps
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutList;
