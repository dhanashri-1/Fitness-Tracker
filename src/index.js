import React from "react";
import ReactDOM from "react-dom/client"; // Change import to `react-dom/client`
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root using createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
