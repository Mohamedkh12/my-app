import logo from "../src/icons_assets/Logo.svg"
import { Link,Routes } from "react-router-dom";
export function Footer(){
    return (
        <footer className="bg-dark text-center">
            <div>
                <img src={logo} alt="" width='10%'/>
                <div className="navigation">
                    <h3>Dormat Navigation</h3>
                    <ul style={{listStyleType:"none"}} >
                    <li><Link to="">Home</Link> </li>
                    <li><Link to="">About </Link></li>
                    <li><Link to="">Menu</Link></li>
                    <li><Link to="">Reservations</Link></li>
                    <li><Link to="">Order Online</Link></li>
                    <li><Link to="">Login</Link></li>

                    </ul>
                    <Routes></Routes>
                </div>
                <div className="contact" >
                    <p>+216 70185004</p>
                    <p>LittleLemone50040chicago</p>
                    <p>Littlelemon@email.tn</p>
                </div>
                <div className="Social-Media" >
                    <p>+216 70185004</p>
                    
                </div>
            </div>
        </footer>
    )
}