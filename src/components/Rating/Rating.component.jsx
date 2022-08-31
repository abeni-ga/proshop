import * as React from "react";
import "./Rating.styles.scss";
const Rating = ({ value, num }) => {
  return (
    <div className="rating-container">
      {[...Array(5)].map((star, index) => {
        return (
          <span key={index}>
            <i
              className={
                value >= index + 1
                  ? "fa-solid fa-star star"
                  : value >= index + 0.5
                  ? "fa-solid fa-star-half-stroke star"
                  : "fa-regular fa-star star"
              }
            />
          </span>
        );
      })}
      <h4> from {num} Reviews </h4>
    </div>
  );
};

export default Rating;
