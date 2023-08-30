import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import salad from "./icons_assets/greek salad.jpg";
import bruchetta from "./icons_assets/bruchetta.svg";
import dessert from "./icons_assets/lemon dessert.jpg";
import "./Specials.css";

function Specials() {
    return (
        <div className="specials">
            <div className="specials-head">
                <h1>Specials</h1>
                <button id="button">Online Menu</button>
            </div>
            <div className="cards">
                <Card className="custom-card">
                    <Card.Img variant="top" src={salad} />
                    <Card.Body>
                        <Card.Title>Greek Salad</Card.Title>
                        <Card.Text>
                            The famous Greek salad of crispy lettuce, peppers, olives and our
                            Chicago style feta cheese, garnished with crunchy garlic and
                            rosemary croutons.
                        </Card.Text>
                        <Button variant="primary">Order Delivery</Button>
                    </Card.Body>
                </Card>
                <Card className="custom-card">
                    <Card.Img variant="top" src={bruchetta} />
                    <Card.Body>
                        <Card.Title>Bruschetta</Card.Title>
                        <Card.Text>
                            Our Bruschetta is made from homemade grilled bread that has been
                            smeared with garlic and seasoned with salt and olive oil. Topped
                            with fresh vegetables.
                        </Card.Text>
                        <Button variant="primary">Order Delivery</Button>
                    </Card.Body>
                </Card>
                <Card className="custom-card">
                    <Card.Img variant="top" src={dessert} />
                    <Card.Body>
                        <Card.Title>Lemon Cake</Card.Title>
                        <Card.Text>
                            This comes straight from grandma’s recipe book, every last
                            ingredient has been sourced and is as authentic as can be
                            imagined.
                        </Card.Text>
                        <Button variant="primary">Order Delivery</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Specials;
