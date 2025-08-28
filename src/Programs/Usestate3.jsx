import { useState } from "react";
import "./UseState3.css";

function UseState3() {
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

export default UseState3