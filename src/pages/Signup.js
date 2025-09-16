// src/pages/Signup.js
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css"; // reuse same styles

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="login-page">
      <h2 className="login-title">Create Account</h2>
      <form onSubmit={handleSignup} className="login-form">
        <label>Name<input type="text" placeholder="Your name" required /></label>
        <label>Email<input type="email" placeholder="Your email" required /></label>
        <label>Password<input type="password" placeholder="Choose password" required /></label>
        <label>Role
          <select required>
            <option value="">Select Role</option>
            <option value="Farmer">👨‍🌾 Farmer</option>
            <option value="Trader">📦 Trader</option>
            <option value="Marketplace">🏪 Marketplace</option>
          </select>
        </label>
        <button type="submit" className="btn primary">Sign Up</button>
      </form>
      <p className="signup-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
