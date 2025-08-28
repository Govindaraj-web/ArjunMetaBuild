import React, { useState } from "react";
import Screen1 from "../Hcj/Screen1_html";
import Screen2 from "../Hcj/Screen2_css";
import Screen3 from "../Hcj/Screen3_js"
import Screen4 from "../Hcj/Screen4_js"
import Screen5 from "../Hcj/Screen5_all";
import Screen6 from "../Hcj/Screen6_react";


function HcjApp() {
  const [activeScreen, setActiveScreen] = useState(1);

  return (
    <div className="top-section">
      {/* Image Menu Scrollable Box */}
      <div className="logo-list">
        <img src="/hcj/html.jpg" alt="Screen1"  onClick={() => setActiveScreen(1)} />
        <img src="/hcj/css.png" alt="Screen2"  onClick={() => setActiveScreen(2)} />
        <img src="/hcj/js.png" alt="Screen3"  onClick={() => setActiveScreen(3)} />
        <img src="/hcj/js1.jpg" alt="Screen4"  onClick={() => setActiveScreen(4)} />
        <img src="/hcj/internetlogo.jpg" alt="Screen5"  onClick={() => setActiveScreen(5)} />        
        <img src="/hcj/react.png" alt="Screen6"  onClick={() => setActiveScreen(6)}  />
      </div>

      {/* Show only the selected screen */}
      <div className="screen-box">
        {activeScreen === 1 && <Screen1 />}
        {activeScreen === 2 && <Screen2 />}
        {activeScreen === 3 && <Screen3 />}
        {activeScreen === 4 && <Screen4 />}
        {activeScreen === 5 && <Screen5 />}
        {activeScreen === 6 && <Screen6 />}
      </div>
    </div>
  );
}

export default HcjApp;
