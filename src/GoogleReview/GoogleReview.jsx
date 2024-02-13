import React from "react";
import "./GoogleReview.css";
import Rating from "@mui/material/Rating";
export const GoogleReview = () => {
  return (
    <div className="googleReview">
      <div className="google">Google Review</div>
      <Rating name="half-rating-read" defaultValue={5} precision={1} readOnly />
    </div>
  );
};
