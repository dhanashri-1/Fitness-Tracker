import React, { useState } from "react";
import './WorkoutForm.css'; // Add styling for WorkoutForm

function WorkoutForm({ addWorkout }) {
  const [exercise, setExercise] = useState("");
  const [reps, setReps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (exercise && reps) {
      addWorkout({ exercise, reps });
      setExercise("");
      setReps("");
    }
  };

  return (
    <div className="workout-form">
      <h2>Log Workout</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <button type="submit">Add Workout</button>
      </form>
    </div>
  );
}

export default WorkoutForm;
