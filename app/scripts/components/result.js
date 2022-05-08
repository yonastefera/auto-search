import React, { useState, useEffect } from "react";
import { MAX_RATING, MIN_RATING } from "../shared/constants";

const Result = ({ result }) => {
  const [rating, setRating] = useState(0);
  const { isActive, price, picture, name, about, tags } = result;

  useEffect(() => {
    // generating random rating
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
  }, [rating]);

  return (
    <div className="item">
      <p className="item__tags">
        {" "}
        {tags.map((tag, i) => (
          <span key={i}>
            {tag}
            {i !== tags.length - 1 && ","}{" "}
          </span>
        ))}
      </p>

      <img className="item__image" src={picture} alt={name} />
      <strong>{name.toUpperCase()}</strong>
      <div className="item__rating">
        {Array(rating)
          .fill(null)
          .map((_, i) => (
            <span key={i}>&#11088;</span>
          ))}
      </div>
      <p className="item__text">{about}</p>
      <strong>$ {price}</strong>
      <br />
      <button className="item__cta" disabled={isActive === "false"}>
        {isActive === "true" ? "ADD TO CART" : "OUT OF STOCK"}
      </button>
    </div>
  );
};

export default Result;
