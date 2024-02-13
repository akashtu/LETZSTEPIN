import React from "react";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="navContainer">
      <h1>LETZSTEPIN</h1>
      <ul className="navUl">
        <li>Home</li>
        <li>Services</li>
        <li>Reviews</li>
        <li>About</li>
        <li>Trainers</li>
      </ul>
    </div>
  );
};
