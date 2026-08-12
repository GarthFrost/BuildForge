// frontend/src/components/BfHeader.jsx
import React from "react";

const BfHeader = () => {
  const headerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "32px",
    paddingBottom: "24px",
    pointerEvents: "none",
  };

  const textStyle = {
    fontSize: "80px", // 5× base size
    fontFamily: "Orbitron, system-ui, sans-serif",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#f9e27a",
    textShadow:
      "0 2px 0 #b38b2f, 0 4px 0 #8a6824, 0 6px 8px rgba(0,0,0,0.7), 0 -2px 6px rgba(255,255,255,0.4)",
    filter: "drop-shadow(0 6px 4px rgba(0,0,0,0.8))",
    padding: "12px 32px",
    borderRadius: "18px",
    border: "3px solid transparent",
    background:
      "linear-gradient(#05030a, #05030a) padding-box, linear-gradient(135deg, #b400ff, #00ff9a) border-box",
    boxShadow:
      "0 0 18px rgba(180,0,255,0.7), 0 0 24px rgba(0,255,154,0.6)",
  };

  return (
    <header style={headerStyle}>
      <h1 style={textStyle}>Buildforger</h1>
    </header>
  );
};

export default BfHeader;
