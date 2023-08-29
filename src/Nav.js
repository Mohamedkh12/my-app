import { Link,Routes } from "react-router-dom";
import logo from "../src/icons_assets/Logo .svg";
import "./Nav.css"
export function Nav(){
    return (
        <div className="nav">
        <nav>
                <img src={logo} alt=""/>
                <ul id='menu'>
                    <li><Link to="">Home</Link> </li>
                    <li><Link to="">About </Link></li>
                    <li><Link to="">Menu</Link></li>
                    <li><Link to="">Reservations</Link></li>
                    <li><Link to="">Order Online</Link></li>
                    <li><Link to="">Login</Link></li>
                </ul>
        </nav>
        <Routes>
        
        </Routes>
        </div>
    )
}