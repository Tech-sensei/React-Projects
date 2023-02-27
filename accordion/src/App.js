import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
function App() {
  // Notice im only using one parameter here because i not need the second one which it setQuestions
  const [questions] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>Questions And Answers About Login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </section>
    </main>
  );
}

export default App;
