import { useState } from "react";
import "./UseState4.css";

function UseState44() {
 const [isOn, setIsOn] = useState(false);

  return (

    <div className="contai">
      <button onClick={() => setIsOn(!isOn)} className={`buttonn ${isOn ? "on" : "off"}`}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>

  )
}


export default UseState44