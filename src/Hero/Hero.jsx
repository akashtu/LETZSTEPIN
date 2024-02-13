import React from "react";
import "./Hero.css";
import { Navbar } from "../Navbar/Navbar";
import { Book } from "../Book/Book";
export const Hero = () => {
  return (
    <div className="heroWrapper">
      <Navbar />
      <div className="appointmentWrapper">
        <Book />
      </div>
    </div>
  );
};
