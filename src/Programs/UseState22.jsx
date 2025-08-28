import { useState } from "react";
import "./UseState22.css";

function UseState22() {
  const [isVisible, setIsVisible] = useState(true);
  return (

    <div className="contai">
      <button onClick={() => setIsVisible(!isVisible)} className="buttonn">
        Toggle
      </button>
      {isVisible && <p className="text-display">Hello, I am visible!</p>}
    
    </div>
    
  )
}
export default UseState22