import React from 'react';
import ratings from "./icons_assets/ratin.png";
import profile1 from "./icons_assets/profile1.jpg";
import profile2 from "./icons_assets/profile2.jpg";
import profile3 from "./icons_assets/profile3.jpg";
import profile4 from "./icons_assets/profile.jpg";
import "./Testimonials.css";

export function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonial-header">
        <h1>Testimonials</h1>
      </div>
      <div className="review-container">
        <div className="review">
          <img id="rating" src={ratings} alt="ratings" />
          <img id="profile" src={profile1} alt="Customer Pic" />
          <h2 id="p1">Selena G.</h2>
          <p>"Really enjoyed the atmosphere."</p>
        </div>
        <div className="review">
          <img id="rating" src={ratings} alt="ratings" />
          <img id="profile" src={profile2} alt="Customer Pic" />
          <h2 id="p2">Brandon M.</h2>
          <p>"The Greek salad was excellent!"</p>
        </div>
        <div className="review">
          <img id="rating" src={ratings} alt="ratings" />
          <img id="profile" src={profile3} alt="Customer Pic" />
          <h2 id="p3">Peter R.</h2>
          <p>"You have to try the Greek Salad!"</p>
        </div>
        <div className="review">
          <img id="rating" src={ratings} alt="ratings" />
          <img id="profile" src={profile4} alt="Customer Pic" />
          <h2 id="p4">Neha J.</h2>
          <p>"Awesome place peaceful atmosphere with delicious food"</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
