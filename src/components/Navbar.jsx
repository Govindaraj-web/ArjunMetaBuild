import React, { useState } from "react";
import SettingsPanel from "./SettingsPanel";

function Navbar({ setBackground }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuToggle = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const menuItems = [
    { name: "Home", link: "#", active: true },
    {
      name: "Program",
      link: "#",
      subMenu: ["HTML", "CSS", "JavaScript"],
    },
    { name: "React", link: "https://reactdcl.netlify.app/" },
    { name: "GitHub", link: "#" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#">Arjun<b style={{color:'blue'}}>Meta</b></a> 
        </div>

        {/* Desktop Menu */}
        <ul className="navbar-menu desktop-menu">
          {menuItems.map((item, i) => (
            <li key={i} className={`navbar-item ${item.active ? "active" : ""}`}>
              <a href={item.link}>{item.name}</a>

              {/* Desktop submenu */}
              {item.subMenu && (
                <ul className="desktop-submenu">
                  {item.subMenu.map((sub, j) => (
                    <li key={j}>
                      <a href="#">{sub}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Right side buttons */}
        <div className="navbar-right">
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(true)}
          >
            <i className="fa fa-bars"></i>
          </button>

          <button
            className="settings-btn"
            onClick={() => setSettingsOpen((prev) => !prev)}
          >
            <i className="fa fa-pencil"></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <i className="fa fa-times"></i>
        </button>

        <ul>
          {menuItems.map((item, i) => (
            <li key={i}>
              <div
                className="mobile-item"
                onClick={() => item.subMenu && handleSubMenuToggle(i)}
              >
                <a href={item.link}>{item.name}</a>
                {item.subMenu && (
                  <span className="arrow">{openSubMenu === i ? "-" : "+"}</span>
                )}
              </div>
              {item.subMenu && openSubMenu === i && (
                <ul className="mobile-submenu">
                  {item.subMenu.map((sub, j) => (
                    <li key={j}>
                      <a href="#">{sub}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Settings Popup */}
      {settingsOpen && (
        <div className="settings-popup">
          <SettingsPanel setBackground={setBackground} />
        </div>
      )}
    </>
  );
}

export default Navbar;
