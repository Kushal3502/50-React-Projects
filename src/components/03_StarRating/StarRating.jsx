import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(-1);
  const [hoverIdx, setHoverIdx] = useState(-1);

  const handleMouseClick = (currIdx) => {
    setRating(currIdx);
  };

  const handleMouseEnter = (currIdx) => {
    setHoverIdx(currIdx);
  };

  const handleMouseLeave = () => {
    setHoverIdx(rating);
  };

  return (
    <>
      <h1>Star Rating Component</h1>
      <div className="star-container">
        {[...Array(noOfStars)].map((_, index) => {
          return (
            <FaStar
              key={index}
              className={
                index <= (hoverIdx >= 0 ? hoverIdx : rating)
                  ? "active"
                  : "inactive"
              }
              onClick={() => {
                handleMouseClick(index);
              }}
              onMouseMove={() => {
                handleMouseEnter(index);
              }}
              onMouseLeave={() => {
                handleMouseLeave();
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default StarRating;
