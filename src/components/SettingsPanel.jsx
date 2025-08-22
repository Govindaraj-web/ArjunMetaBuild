import React, { useState } from "react";

const images = [
  "/hcj/imb1.jpg",
  "/hcj/imb2.jpg",
  "/hcj/imb3.jpg",
  "/hcj/imb4.jpg",
  "/hcj/imb5.jpg",
  "/hcj/imb6.jpg",
  "/hcj/imb7.jpg",
  "/hcj/imb8.jpg",
  "/hcj/imb9.jpg",
  "/hcj/imb10.jpg",
  "/hcj/imb11.jpg",
  
];

export default function SettingsPanel({ setBackground }) {
  const [selected, setSelected] = useState("/hcj/imb10.jpg");

  const handleChange = (img) => {
    setSelected(img);
    setBackground(img);
  };

  return (
    <div className="card51">
      <h3>Background Change</h3>
      <div className="thumbnail-container">
        {images.map((img) => (
          <img
            key={img}
            src={img}
            className={`thumbnail ${selected === img ? "selected" : ""}`}
            alt="bg"
            onClick={() => handleChange(img)}
          />
        ))}
      </div>
    </div>
  );
}
