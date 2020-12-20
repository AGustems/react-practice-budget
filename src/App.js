import React from "react"
import Question from "./components/Question"

function App() {
  return (
    <div className="container">
      <header>
        <h1>Weekly Expenses</h1>
        <div className="content-principal content">
          <Question/>
        </div>
      </header>
    </div>
  );
}

export default App;
