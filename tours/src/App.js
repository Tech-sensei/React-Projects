import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTours = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const getTours = async () => {
    // Before getting the API quickly show loading components
    setIsLoading(true); //Not Needed to be set here actually, you can delete if you want.

    try {
      const response = await fetch(url);
      const tours = await response.json();

      // After getting the API setIsLoading(false)
      setIsLoading(false);

      setTours(tours);

      
    } catch (error) {
      setIsLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  if (isLoading ) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <div className="underline"></div>
          <button className="btn" onClick={getTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTours} />
    </main>
  );
 
}

export default App;
