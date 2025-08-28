import React from "react";
import { items6 } from "../Data/react_data";


export default function LangList6({ setProgram }) {
  return (
    <div className="listitems">
      {items6.map((item, index) => (
        <button
          key={index}
          onClick={() => setProgram(item.program)}
          className="listbtn"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
