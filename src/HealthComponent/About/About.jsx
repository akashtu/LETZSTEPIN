import React from "react";
import "./About.css";
export const About = () => {
  return (
    <div className="aboutContainer">
      <div className="leftContainer">
        <img
          src="https://alkaison.github.io/Health-Plus/static/media/doctor-group.01394386d8270bd40bc1.png"
          alt=""
        />
      </div>
      <div className="rightContainer">
        <h1>About Us</h1>
        <p>
          Welcome to Health Plus, your trusted partner for accessible and
          personalized healthcare. Our expert doctors offer online consultations
          and specialized services, prioritizing your well-being. Join us on
          this journey towards a healthier you.
        </p>
        <h2>Your Solutions</h2>
        <h3>Choose a Specialist</h3>
        <p>
          Find your perfect specialist and book with ease at Health Plus. Expert
          doctors prioritize your health, offering tailored care.
        </p>
        <h3>Make a Schedule</h3>
        <p>
          Choose the date and time that suits you best, and let our dedicated
          team of medical professionals ensure your well-being with personalized
          care.
        </p>
        <h3>Get Your Solutions</h3>
        <p>
          Our experienced doctors and specialists are here to provide expert
          advice and personalized treatment plans, helping you achieve your best
          possible health.
        </p>
      </div>
    </div>
  );
};
