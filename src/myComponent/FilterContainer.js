import React from "react";
import "./FilterContainer.css";

export default function FilterContainer() {
  return (
    <div className="filterContainer">
      <div className="tagContainer">
        <span>Tags</span>
        <input className="tagInput" type="text" />
      </div>
      <div className="colorContainer">
        <span>Tags</span>
        <input
          placeholder="Enter hex or select"
          className="ColorInput"
          type="text"
        />
      </div>
    </div>
  );
}
