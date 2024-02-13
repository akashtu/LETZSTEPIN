import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbarrapper">
      <h3>LETZSTEPIN</h3>
      <ul>
        <li>Home</li>
        <li className="hoverClass">
          Services
          <div className="dropDown">
            <ul className="dropDownul">
              <li>
                <Link to="/health">HealthCare</Link>
              </li>
              <li>
                <Link to="/fitness">Fitness</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>Blogs</li>
        <li>About</li>
        <li className="Booknow">Book now</li>
      </ul>
    </div>
  );
};
