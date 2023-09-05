import React from "react";
import logo from "../src/icons_assets/Logo.svg";
import { BookingPage } from "./booking";
import { Order } from "./Oreder";
import { HomePage } from "./HomePage";
import { Login } from "./Login";
import { About } from "./About";
import { Menu } from "./Menu";
import "./Nav.css";
import { Routes, Route, Link } from 'react-router-dom';

export function Nav() {
  return (
    <div className="nav">
      <nav>
        <img src={logo} alt="Logo" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/Oreder">Order Online</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/Oreder" element={<Order />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default Nav;
