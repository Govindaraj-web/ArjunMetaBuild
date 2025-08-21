import React from "react";
import { items4} from "../Data/js1_data";

export default function LangList4({ setProgram }) {
  return (
    <div className="listitems">
      {items4.map((item, index) => (
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
