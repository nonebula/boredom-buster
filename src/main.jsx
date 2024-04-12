import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import MainFeature from "./components/MainFeature.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <MainFeature />
    <App />
  </React.StrictMode>
);
