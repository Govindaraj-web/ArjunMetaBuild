import React from "react";

function Navbar() {
  return (
    <div className="menu-bar">
      <ul>
        <li className="active">
          <a href="#">
            <i className="fa fa-home"></i> Home
          </a>
        </li>

        <li>
          <a href="#">
            <i className="fa fa-book"></i> Program
          </a>

          <div className="sub-menu-1">
            <ul>
              <li>
                <a href="#">
                  HTML
                </a>
              </li>
              <li>
                <a href="#">
                  CSS
                </a>
              </li>
              <li>
                <a href="#">
                  JavaScript
                </a>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <a href="https://reactdcl.netlify.app/">
            <i className="fa fa-user"></i> React
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-edit"></i> GitHub
          </a>
        </li>
        {/* <li>
          <a href="#">
            <i className="fa fa-users"></i> Bootstrap
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-phone"></i> Python
          </a>
        </li> */}
      </ul>
    </div>
  );
}

export default Navbar;
