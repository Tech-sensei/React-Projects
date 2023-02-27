import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let amount = +count;
    if (count <= 0) amount = 1;
    if (count > data.length) amount = 20;
    setText(data.slice(0, amount));
    setCount("");
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum???. Try this !!</h3>
      <form className="lorem-form" onSubmit={submitHandler}>
        <label htmlFor="amount">Paragraph:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>

      <article className="lorem-text">
        {text.map((word, index) => {
          return <p key={index}>{word}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
