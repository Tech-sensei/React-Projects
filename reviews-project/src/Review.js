import React, { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [review, setReview] = useState(0);
  const { name, image, job, text } = reviews[review];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const prevReview = () => {
    setReview((review) => {
      let newReview = review - 1;
      return checkNumber(newReview);
    });
  };

  const nextReview = () => {
    setReview((review) => {
      let newReview = review + 1;
      return checkNumber(newReview);
    });
  };

  const randomReview = () => {
    const randomNum = Math.floor(Math.random() * reviews.length);
    setReview(checkNumber(randomNum));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextReview}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>
        Random
      </button>
    </article>
  );
};

export default Review;
