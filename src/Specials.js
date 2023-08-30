import "./Specials.css";
import salad from "./icons_assets/greek salad.jpg";
import Burchetta from "./icons_assets/bruchetta.svg";
import dessert from "./icons_assets/lemon dessert.jpg";


import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


export function Specials() {
  return (
    <CardGroup className="core">
      <Card>
        <Card.Img variant="top" src={salad} />
        <Card.Body>
        <div className="card-price">
          <Card.Title>Greek Salad</Card.Title>
          
          <Card.Text className="price">$12.99</Card.Text>
          </div>
          <Card.Text>
          Diam quam nulla porttitor massa. Sit amet aliquam id diam. Ut
            venenatis tellus in metus. Fringilla phasellu
          </Card.Text>
        
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Order a delevery</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={Burchetta} />
        <Card.Body>
        <div className="card-price">
          <Card.Title>Burchetta</Card.Title>
          <Card.Text className="price"> $5.99</Card.Text>
          </div>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Order a delevery</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={dessert} />
        <Card.Body>
        <div className="card-price">
          <Card.Title>lemon Dessert</Card.Title>
          <Card.Text className="price"> $5.00</Card.Text>
          </div>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Specials;