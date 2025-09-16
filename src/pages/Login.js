// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function Login({ setIsLoggedIn }) {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); // mark as logged in
    navigate("/"); // go to dashboard
  };

  if (!role) {
    return (
      <div className="login-page">
        <h1 className="login-title">AgriPredict</h1>
        <p className="login-subtitle">Choose your role to continue</p>
        <div className="role-selector">
          <button onClick={() => setRole("Farmer")} className="role-card">👨‍🌾 Farmer</button>
          <button onClick={() => setRole("Trader")} className="role-card">📦 Trader</button>
          <button onClick={() => setRole("Marketplace")} className="role-card">🏪 Marketplace</button>
        </div>
        <p className="signup-link">
          New user? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="login-page">
      <h2 className="login-title">{role} Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {role === "Farmer" ? (
          <>
            <label>Phone Number<input type="tel" placeholder="Enter phone number" required /></label>
            <label>OTP<input type="number" placeholder="Enter OTP" required /></label>
          </>
        ) : (
          <>
            <label>Email<input type="email" placeholder="Enter email" required /></label>
            <label>Password<input type="password" placeholder="Enter password" required /></label>
          </>
        )}
        <button type="submit" className="btn primary">Login</button>
      </form>
      <button className="btn outline" onClick={() => setRole(null)}>⬅ Back</button>
    </div>
  );
}
