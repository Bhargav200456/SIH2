// src/components/Header.js
import React from "react";

export default function Header({ region, setRegion, regions }) {
  return (
    <header className="topbar">
      <div className="brand">
        <div className="leaf">🌾</div>
        <div>
          <h1>AgriPredict</h1>
          <p className="tag">AI Price Forecasts — plan the perfect sell</p>
        </div>
      </div>

      <div className="controls">
        <label className="selectLabel">
          Region
          <select
            aria-label="Select region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
      </div>
    </header>
  );
}
