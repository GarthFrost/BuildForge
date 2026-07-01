import React, { useRef } from "react";
import "./RuneCarousel.css"; // optional if you want to style separately

export default function RuneCarousel({ runes, onSelect }) {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        style={{
          background: "none",
          border: "none",
          fontSize: "2rem",
          cursor: "pointer",
          padding: "0 10px"
        }}
      >
        ◀
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: "12px",
          padding: "10px",
          scrollbarWidth: "none"
        }}
      >
        {runes.map((rune) => (
          <div
            key={rune.id}
            onClick={() => onSelect(rune)}
            style={{
              flex: "0 0 auto",
              width: "100px",
              height: "100px",
              background: "#222",
              borderRadius: "10px",
              scrollSnapAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border: "2px solid #444"
            }}
          >
            {/* Drop your graphic object here */}
            {rune.icon ? (
              <img
                src={rune.icon}
                alt={rune.name}
                style={{ width: "80%", height: "80%", objectFit: "contain" }}
              />
            ) : (
              <span style={{ color: "#fff", fontSize: "0.8rem" }}>
                {rune.name}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        style={{
          background: "none",
          border: "none",
          fontSize: "2rem",
          cursor: "pointer",
          padding: "0 10px"
        }}
      >
        ▶
      </button>
    </div>
  );
}
