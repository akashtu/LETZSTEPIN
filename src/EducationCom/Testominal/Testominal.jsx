import React from "react";
import "./Testominal.css";
export const Testominal = () => {
  return (
    <div className="testominalComponent">
      <h3>TESTIMONIAL</h3>
      <h1>Our Successful Students</h1>
      <div className="testominalInner">
        <div className="testominalChildInner">
          <div className="testominalChild">
            <div className="image">
              <img
                src="https://educational-website-reactjs.netlify.app/images/testo/t1.webp"
                alt=""
                width={"50%"}
              />
            </div>
            <div className="content">
              <h2>ROGER SCOTT</h2>
              <h3>MARKETING MANAGER</h3>
            </div>
          </div>
          <h4>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </h4>
        </div>

        <div className="testominalChildInner">
          <div className="testominalChild">
            <div className="image">
              <img
                src="https://educational-website-reactjs.netlify.app/images/testo/t2.webp"
                alt=""
                width={"50%"}
              />
            </div>
            <div className="content">
              <h2>ROGER SCOTT</h2>
              <h3>MARKETING MANAGER</h3>
            </div>
          </div>
          <h4>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </h4>
        </div>
        <div className="testominalChildInner">
          <div className="testominalChild">
            <div className="image">
              <img
                src="https://educational-website-reactjs.netlify.app/images/testo/t3.webp"
                alt=""
                width={"50%"}
              />
            </div>
            <div className="content">
              <h2>ROGER SCOTT</h2>
              <h3>MARKETING MANAGER</h3>
            </div>
          </div>
          <h4>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </h4>
        </div>
      </div>
    </div>
  );
};
