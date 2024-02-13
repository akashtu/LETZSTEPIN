import React from "react";
import "./BoxFitness.css";
export const BoxFitness = () => {
  return (
    <div className="boxFitnessComponent">
      <div className="boxFitnessInner boxColor">
        <div className="image">
          <img
            src="https://mian-ali.github.io/GymWebsite/images/about1.jpg"
            alt=""
            width={"100%"}
          />
        </div>
        <div className="boxContent">
          <h1>Free Consultation</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
        </div>
      </div>
      <div className="boxFitnessInner">
        <div className="image">
          <img
            src="https://mian-ali.github.io/GymWebsite/images/about2.jpg"
            alt=""
            width={"100%"}
          />
        </div>
        <div className="boxContent">
          <h1>Best Training</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
        </div>
      </div>
      <div className="boxFitnessInner boxColor">
        <div className="image">
          <img
            src="https://mian-ali.github.io/GymWebsite/images/about3.jpg"
            alt=""
            width={"100%"}
          />
        </div>
        <div className="boxContent">
          <h1>Build Perfect Body</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
        </div>
      </div>
    </div>
  );
};
