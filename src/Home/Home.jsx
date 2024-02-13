import React from "react";
import { Card } from "../Card/Card";
import { GoogleReview } from "../GoogleReview/GoogleReview";
import { Story } from "../Story/Story";
import { TopNav } from "../TopNav/TopNav";
import { Hero } from "../Hero/Hero";
import "./Home.css";
import { Footer } from "../Footer/Footer";
import { FrontImages } from "../FrontImages/FrontImages";
export const Home = () => {
  return (
    <div className="HomeContainer">
      <TopNav />
      <Hero />
      <FrontImages />
      <Footer />
    </div>
  );
};
