import React from "react";
import Spinner from "./spinner.svg";

const Loading = () => {
  return (
    <div className="loading">
      <img src={Spinner} alt="" className="spinner" />
      <h2>loading...</h2>
    </div>
  );
};

export default Loading;
