// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Overview from "./components/Overview";
import ForecastCard from "./components/ForecastCard";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { Toaster } from "sonner";


const MOCK_FORECAST = [
  { crop: "Wheat", unit: "₹/quintal", currentPrice: 21800, forecast: [2160, 2178, 2185, 2200, 2215, 2230, 2240], region: "Punjab" },
  { crop: "Rice", unit: "₹/quintal", currentPrice: 32000, forecast: [3190, 3180, 3195, 3210, 3225, 3210, 3230], region: "Bihar" },
  { crop: "Maize", unit: "₹/quintal", currentPrice: 1500, forecast: [1490, 1495, 1502, 1505, 1510, 1520, 1525], region: "Maharashtra" },
  { crop: "Rice", unit: "₹/quintal", currentPrice: 1500, forecast: [1485, 1500, 1535, 1525, 1515, 1520, 1525], region: "Andhra Pradesh" },
  { crop: "Ragi", unit: "₹/quintal", currentPrice: 1500, forecast: [1480, 1500, 1525, 1525, 1515, 1520, 1525], region: "Karnataka" },
];

export default function App() {
  const [region, setRegion] = useState("All regions");
  const [forecasts, setForecasts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 🔑 login state

  useEffect(() => {
    setForecasts(MOCK_FORECAST.filter((f) => region === "All regions" || f.region === region));
  }, [region]);

  const regions = ["All regions", "Punjab", "Bihar", "Maharashtra", "Andhra Pradesh", "Karnataka"];

  return (
    
    <Router>
      <Routes>
    
        {/* Login Page */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        
        {/* Signup Page */}
        <Route path="/signup" element={<Signup />} />

        {/* Dashboard (Protected Route) */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <div className="app">
                <Header region={region} setRegion={setRegion} regions={regions} />
                <main className="container">
                  <Overview />
                  <Toaster />
                  <section className="grid">
                    {forecasts.map((f) => (
                      <ForecastCard key={`${f.crop}-${f.region}`} {...f} />
                    ))}
                  </section>
                </main>
                <Footer />
              </div>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </Router>
  );
}
