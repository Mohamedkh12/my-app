
import React from "react";
import logo from "../src/icons_assets/Logo.svg";
import { HomePage } from "./HomePage";
import {BookingPage} from "./booking"
import { Order } from "./Oreder";
import { Login } from "./Login";
import { About } from "./About";
import { Menu } from "./Menu";
import "./Nav.css";
import { Link, Routes,Route } from "react-router-dom";


export function Nav() {
  return (
    <div className="nav">
      <nav>
        <img src={logo} alt="Logo" />
        <ul>
        <li><Link to="/">Home</Link> </li>
                    <li><Link to="/src/About.js">About</Link></li>
                    <li><Link to="/src/Menu">Menu</Link></li>
                    <li><Link to="/src/booking.js">Reservations</Link></li>
                    <li><Link to="/src/Order">Order Online</Link></li>
                    <li><Link to="/src/Login">Login</Link></li>
        </ul>
      </nav>
      <Routes> 
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
    <Route path="/Order" element={<Order />}></Route>
    <Route path="/Login" element={<Login />}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Menu" element={<Menu/>}></Route>


</Routes>
    </div>
  );
}

export default Nav;


