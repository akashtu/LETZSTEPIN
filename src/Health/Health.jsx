import React from "react";
import "./Health.css";
import { Navbar } from "../HealthComponent/Navbar";
import { Hero } from "../HealthComponent/Hero/Hero";
import { What } from "../HealthComponent/What/What";
import { Card } from "../HealthComponent/Card/Card";
import { About } from "../HealthComponent/About/About";
import { Doctors } from "../HealthComponent/Doctors/Doctors";
import { Footer } from "../Footer/Footer";
export const Health = () => {
  return (
    <div className="healthClass">
      <Navbar />
      <Hero />
      <What />
      <Card />
      <About />
      <Doctors />
      <Footer />
    </div>
  );
};
