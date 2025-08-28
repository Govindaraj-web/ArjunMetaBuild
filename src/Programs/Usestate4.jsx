import { useState } from "react";
import "./Usestate4.css";

function Usestate4() {
  const [isOn, setIsOn] = useState(false);

  return (

    <div className="contai">
      <button onClick={() => setIsOn(!isOn)} className={`buttonn ${isOn ? "on" : "off"}`}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>

  )
}

export default Usestate4