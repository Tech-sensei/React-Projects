import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  // const { tours, removeTour } = props;
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} remove={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
