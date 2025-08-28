import { useState } from "react";
import "./Usestate2.css";

function Usestate2() {
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

export default Usestate2