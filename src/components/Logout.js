import React from "react";
import './Logout.css'; // Add styling for Logout

function Logout({ setIsAuthenticated }) {
  const handleLogout = () => {
    setIsAuthenticated(false);
    console.log("Logged out");
  };

  return (
    <div className="logout">
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;

