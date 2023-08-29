
import React from "react";
import logo from "../src/icons_assets/Logo.svg";

import "./Nav.css";

export function Nav() {
  return (
    <div className="nav">
      <nav>
        <img src={logo} alt="Logo" />
        <ul id='menu'>
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
          <li>Reservations</li>
          <li>Order Online</li>
  <li>Login</li>
        </ul>
      </nav>
    
    </div>
  );
}

export default Nav;


