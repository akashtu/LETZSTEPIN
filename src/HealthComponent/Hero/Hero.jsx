import React from "react";
import "./Hero.css";
export const Hero = () => {
  return (
    <div className="heroContainer">
      <div className="leftContainer">
        <h5>Health comes first</h5>
        <h1>Find your Doctor and make an Appointments</h1>
        <p>
          Talk to online doctors and get medical advice, online prescriptions,
          refills and medical notes within minutes. On-demand healthcare
          services at your fingertips.
        </p>
      </div>
      <div className="rightContainer">
        <img
          src="https://alkaison.github.io/Health-Plus/static/media/doctor-picture.0261bb4efe7a9075c56a.png"
          alt=""
          className="imageClass"
        />
      </div>
    </div>
  );
};
