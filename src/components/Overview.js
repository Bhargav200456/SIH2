// src/components/Overview.js
import React from "react";

export default function Overview() {
  const items = [
    {
      title: "Market Snapshot",
      text: "Current mandi prices & short-term AI forecast (7 days).",
    },
    {
      title: "Alerts",
      text: "Set thresholds to receive notifications when prices rise or fall.",
    },
    {
      title: "Tips",
      text: "Weather & demand signals affect price. Consider storage costs.",
    },
  ];

  return (
    <section className="overview">
      {items.map((item) => (
        <div key={item.title} className="overview-card">
          <h2>{item.title}</h2>
          <p className="muted">{item.text}</p>
        </div>
      ))}
    </section>
  );
}
