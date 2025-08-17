import React from "react";
import { items } from "../Data/html_data";

export default function LangList1({ setProgram }) {
  return (
    <div className="listitems">
      {items.map((item, index) => (
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
