import React, { useState } from "react";
import './WaterIntakeTracker.css'; // Add styling for WaterIntakeTracker

function WaterIntakeTracker() {
  const [intake, setIntake] = useState(0);

  const handleChange = (e) => {
    setIntake(e.target.value);
  };

  return (
    <div className="water-intake-tracker">
      <h2>Water Intake Tracker</h2>
      <input
        type="number"
        value={intake}
        onChange={handleChange}
        placeholder="Enter water intake (liters)"
      />
      <p>Current Intake: {intake} liters</p>
    </div>
  );
}

export default WaterIntakeTracker;
