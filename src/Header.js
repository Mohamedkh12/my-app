import restaurant from "./icons_assets/restaurant.jpg";
import "./Heading.css";

export function Heading() {
  return (
    <div className="heading">
      <div className="heading-content">
        <h1>Little lemone</h1>
        <h3 id='h3h3'>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <button><p>Reserve a Table</p></button>
      </div>
      <img src={restaurant} alt="restaurant" width="300px" height="300px" />
    </div>
  );
}

export default Heading;
