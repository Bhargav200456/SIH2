// src/components/Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <small>
        © {new Date().getFullYear()} AgriPredict 
      </small>
    </footer>
  );
}
