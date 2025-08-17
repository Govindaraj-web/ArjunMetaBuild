import React from "react";
import { items2 } from "../Data/css_data";

export default function LangList({ setProgram }) {
  return (
    <div className="listitems">
      {items2.map((item, index) => (
        <button 
          key={index}
          onClick={() => setProgram(item.program)} // single click = run program
         className="listbtn"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
