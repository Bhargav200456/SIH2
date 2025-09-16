// src/components/ForecastCard.js
import React from "react";

/**
 * Draws a sparkline (tiny chart) from forecast values.
 */
function sparklinePath(values, width = 120, height = 30, padding = 4) {
  if (!values || values.length === 0) return "";
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = (width - padding * 2) / (values.length - 1 || 1);

  const points = values.map((v, i) => {
    const x = padding + i * step;
    const y = padding + (1 - (v - min) / range) * (height - padding * 2);
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  });

  return `M${points.join(" L")}`;
}

export default function ForecastCard({ crop, region, unit, currentPrice, forecast }) {
  const sparkPath = sparklinePath(forecast);
  const last = forecast[forecast.length - 1];
  const direction = last >= currentPrice ? "up" : "down";
  const pct = (((last - currentPrice) / (currentPrice || 1)) * 100).toFixed(1);

  return (
    <article className="card">
      <div className="card-header">
        <div>
          <h3>{crop}</h3>
          <p className="muted small">{region}</p>
        </div>
        <div className="price">
          <div className="current">{currentPrice}</div>
          <div className={`delta ${direction}`}>
            {direction === "up" ? "▲" : "▼"} {Math.abs(pct)}%
          </div>
        </div>
      </div>

      <div className="sparklineWrap">
        <svg viewBox="0 0 120 30" className="spark">
          <path d={sparkPath} fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <div className="forecast-value">
          {last} <span className="unit">{unit}</span>
        </div>
      </div>

      <div className="card-footer">
        <button
          className="btn primary"
          onClick={() =>
            alert(
              `Suggestion for ${crop} (${region}): ${
                last > currentPrice ? "Consider holding for higher price." : "Consider selling now."
              }`
            )
          }
        >
          Decision Assist
        </button>
        <button
          className="btn outline"
          onClick={() => alert(`Detailed graph & insights for ${crop} are coming soon.`)}
        >
          More
        </button>
      </div>
    </article>
  );
}
