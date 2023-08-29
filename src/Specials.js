import "./Specials.css";
import salad from "./icons_assets/greek salad.jpg"
import Burchetta from "./icons_assets/bruchetta.svg"
import dessert from "./icons_assets/lemon dessert.jpg"
export function Specials(){
    return(
        <div className="special">
            <h1>SPECIALS</h1>
            <button>Online Menu</button>
            <div className="card">
                <image src={salad}></image>
                <h3>Greek Salad</h3>
                <p>$12.99</p>
                <p> Diam quam nulla porttitor massa. Sit amet aliquam id diam. Ut venenatis tellus in metus. Fringilla phasellu</p>
                <p>Order a delevery</p>
            </div>
            <div className="card">
                <image src={Burchetta}></image>
                <h3>Burchetta</h3>
                <p>$5.99</p>
                <p> Diam quam nulla porttitor massa. Sit amet aliquam id diam. Ut venenatis tellus in metus. Fringilla phasellu</p>
                <p>Order a delevery</p>
            </div>
            <div className="card">
                <image src={dessert}></image>
                <h3>lemon Dessert</h3>
                <p>$5.00</p>
                <p> Diam quam nulla porttitor massa. Sit amet aliquam id diam. Ut venenatis tellus in metus. Fringilla phasellu</p>
                <p>Order a delevery</p>
            </div>


        </div>
    )
}