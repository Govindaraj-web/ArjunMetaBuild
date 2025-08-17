import React, { useState } from "react";
import Screen1 from "../Hcj/Screen1_html";
import Screen2 from "../Hcj/Screen2_css";
import Screen3 from "../Hcj/Screen3_js"


function HcjApp() {
  const [activeScreen, setActiveScreen] = useState(1);

  return (
    <div className="top-section">
      {/* Image Menu Scrollable Box */}
      <div className="logo-list">
        <img src="/hcj/html.jpg" alt="Screen1"  onClick={() => setActiveScreen(1)} />
        <img src="/hcj/css.png" alt="Screen2"  onClick={() => setActiveScreen(2)} />
        <img src="/hcj/js.jpg" alt="Screen3"  onClick={() => setActiveScreen(3)} />
        <img src="/hcj/internetlogo.jpg" alt="Screen4"  onClick={() => setActiveScreen(4)} />
        <img src="/hcj/js.jpg" alt="Screen5"  onClick={() => setActiveScreen(5)} />
        <img src="/hcj/js.jpg" alt="Screen6"  onClick={() => setActiveScreen(6)} />
      </div>

      {/* Show only the selected screen */}
      <div className="screen-box">
        {activeScreen === 1 && <Screen1 />}
        {activeScreen === 2 && <Screen2 />}
        {activeScreen === 3 && <Screen3 />}
      </div>
    </div>
  );
}

export default HcjApp;
