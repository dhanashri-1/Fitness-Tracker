import React from "react";
import { Link } from "react-router-dom";
import './Header.css'; // Optional: Add your custom styling here

function Header() {
  return (
    <header>
      <h1>FitLife Tracker</h1>
      <nav>
      <Link to="/login">Login</Link> {/* Added Login Link */}
        <Link to="/">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/workout">Log Workout</Link>
        <Link to="/history">Workout History</Link>
        <Link to="/goals">Set Goals</Link>
        <Link to="/water">Water Intake Tracker</Link>
        <Link to="/logout">Logout</Link>
      </nav>
    </header>
  );
}

export default Header;

