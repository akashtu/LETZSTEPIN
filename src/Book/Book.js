import React, { useState } from "react";
import "./Book.css";
import Person3Icon from "@mui/icons-material/Person3";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
export const Book = () => {
  const [value, setValue] = useState();
  return (
    <div className="bookAppointment">
      <h3>
        Book an Appointment for <span className="textdecoration">Rs 1000</span>{" "}
        Free
      </h3>
      <p>60+ Expert Physiotherapists for 200+ conditions</p>
      <div className="inputForm">
        <div className="inputForm1">
          <Person3Icon />
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="inputForm2">
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="buttonClass">
          <button>Start Your Recovery</button>
        </div>
      </div>
    </div>
  );
};
