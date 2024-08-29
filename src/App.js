import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import Goals from "./components/Goals";
import WaterIntakeTracker from "./components/WaterIntakeTracker";
import Logout from "./components/Logout";
import Login from "./components/Login";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <Router>
      <div className="App">
        {isAuthenticated && <Header />}
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/login" />} />
          <Route path="/workout" element={isAuthenticated ? <WorkoutForm addWorkout={addWorkout} /> : <Navigate to="/login" />} />
          <Route path="/history" element={isAuthenticated ? <WorkoutList workouts={workouts} /> : <Navigate to="/login" />} />
          <Route path="/goals" element={isAuthenticated ? <Goals /> : <Navigate to="/login" />} />
          <Route path="/water" element={isAuthenticated ? <WaterIntakeTracker /> : <Navigate to="/login" />} />
          <Route path="/logout" element={isAuthenticated ? <Logout setIsAuthenticated={setIsAuthenticated} /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
