import React from "react";
import Summary from "./Summary";
import './Dashboard.css'; // Add styling for Dashboard

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <Summary />
    </div>
  );
}

export default Dashboard;

