import React from "react";
import "./EduContent.css";
export const EduContent = () => {
  return (
    <div className="eduContentComponent">
      <div className="leftComponent">
        <div className="image">
          <img
            src="https://educational-website-reactjs.netlify.app/images/about.webp"
            alt=""
            width={"70%"}
          />
        </div>
      </div>
      <div className="rightComponent">
        <h1>Benefits About Online Learning Expertise</h1>
        <div className="rightComponentDiv">
          <div className="rightComponentDivImg">
            <img
              src="https://img.icons8.com/dotty/80/000000/storytelling.png"
              alt=""
            />
          </div>
          <div className="rightComponentContent">
            <h3>Online Courses</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div className="rightComponentDiv">
          <div className="rightComponentDivImg">
            <img
              src="https://img.icons8.com/ios/80/000000/diploma.png"
              alt=""
            />
          </div>
          <div className="rightComponentContent">
            <h3>Earn A Certificates</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div className="rightComponentDiv">
          <div className="rightComponentDivImg">
            <img
              src="https://img.icons8.com/ios/80/000000/athlete.png"
              alt=""
            />
          </div>
          <div className="rightComponentContent">
            <h3>Learn with Expert</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
