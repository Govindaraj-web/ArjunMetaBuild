import { useState } from "react";
import "./UseState33.css";

function UseState33() {
  const [text, setText] = useState("");

  return (

      <div className="contai">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input-box"
          placeholder="Type something..."
        />
        <p className="text-display">You typed: {text}</p>
      </div>
   
  
  )
}


export default UseState33