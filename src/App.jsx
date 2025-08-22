import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HcjApp from "./components/HcjApp";
import "./App.css";

function App() {
  const [background, setBackground] = useState("/hcj/imb10.jpg"); // default bg

  return (
    <div
      className="hcj-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar setBackground={setBackground} />
      <HcjApp />
    </div>
  );
}

export default App;
