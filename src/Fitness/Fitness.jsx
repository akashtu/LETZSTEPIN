import React from "react";
import { Navbar } from "../FitnessComponent/Navbar";
import { HeroFitness } from "../FitnessComponent/HeroFitness/HeroFitness";
import { ContentFitness } from "../FitnessComponent/ContentFitness/ContentFitness";
import { CardFitness } from "../FitnessComponent/CardFitness/CardFitness";
import { BoxFitness } from "../FitnessComponent/BoxFitness/BoxFitness";
import { Footer } from "../Footer/Footer";

export const Fitness = () => {
  return (
    <div>
      <Navbar />
      <HeroFitness />
      <BoxFitness />
      <ContentFitness />
      <CardFitness />
      <Footer />
    </div>
  );
};
