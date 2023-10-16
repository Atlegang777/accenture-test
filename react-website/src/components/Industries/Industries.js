import "./Industries.css";
import React from "react";

function Industries() {
  // Array of icons
  const icons = [
    "wesgrow",
    "visa",
    "tyme",
    "bbc",
    "distell",
    "sanlam",
    "engen",
    "liquid",
    "microsoft",
    "multichoice",
    "nike",
    "pnp",
    "santam",
    "spotify",
    "tfg",
  ];

  return (
    <div className="center">
      <div className="title">
        <div className="dash"></div>
        <p className="case-study-title">You’ll be in good company </p>
      </div>
      <p className="brand-title">Trusted by leading brands </p>
      <div className="brand-image-container">
        {icons.map((image, index) => (
          <div key={index} className={`${image}-image-item`}></div>
        ))}
      </div>
    </div>
  );
}

export default Industries;
