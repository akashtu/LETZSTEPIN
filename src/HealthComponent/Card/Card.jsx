import React from "react";
import "./Card.css";
export const Card = () => {
  return (
    <div className="cardContainer">
      <div className="box">
        <h1>Emergency Care</h1>
        <h5>
          Our Emergency Care service is designed to be your reliable support in
          critical situations. Whether it's a sudden illness, injury, or any
          medical concern that requires immediate attention, our team of
          dedicated healthcare professionals is available 24/7 to provide prompt
          and efficient care.
        </h5>
      </div>
      <div className="box">
        <h1>Heart Disease</h1>
        <h5>
          Our team of experienced cardiologists and medical experts use
          state-of-the-art technology to assess your cardiovascular health and
          design personalized treatment plans. From comprehensive screenings to
          advanced interventions, we are committed to helping you maintain a
          healthy heart and lead a fulfilling life.
        </h5>
      </div>
      <div className="box">
        <h1>Dental Care</h1>
        <h5>
          Smile with confidence as our Dental Care services cater to all your
          oral health needs. Our skilled dentists provide a wide range of
          treatments, from routine check-ups and cleanings to cosmetic
          procedures and restorative treatments.
        </h5>
      </div>
    </div>
  );
};
