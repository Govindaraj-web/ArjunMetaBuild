import React from "react";
import { items5} from "../Data/hcjall_data.js";

export default function LangList5({ setProgram }) {
  return (
    <div className="listitems">
      {items5.map((item, index) => (
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
