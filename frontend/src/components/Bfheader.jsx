// frontend/src/components/Bfheader.jsx
import React from "react";
import headerImg from "../assets/transbfheader.png";

export default function Bfheader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
        marginBottom: "20px",
        pointerEvents: "none",
      }}
    >
      <img
        src={headerImg}
        alt="Buildforger Header"
        style={{
          width: "100%",
          maxWidth: "900px",
          height: "auto",
          userSelect: "none",
        }}
      />
    </div>
  );
}
