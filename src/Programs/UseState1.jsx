import { useState } from "react";
import "./UseState1.css";

function UseState1() {
    const [count, setCount] = useState(0);

  return (
    <>
   <div className="contai">
      <h2 className="count-text">Count: {count}</h2>
      <button onClick={() => setCount(count + 1)} className="buttonn">Increment </button>
      <button onClick={()=>setCount(count-1)} className="buttonn">Decrement</button>
    </div>

    </>
  )
}

export default UseState1