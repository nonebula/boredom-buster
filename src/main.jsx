import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import ActivityComponent from "./components/ActivityComponent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <ActivityComponent />
    <App />
  </React.StrictMode>
);
