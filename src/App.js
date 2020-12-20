import React, {useState} from "react"
import Question from "./components/Question"
import Form from "./components/Form"

function App() {
  // Define the budget state
  const [budget, setBudget] = useState(0)
  const [remaining, setRemaining] = useState(0)

  return (
    <div className="container">
      <header>
        <h1>Weekly Expenses</h1>
        <div className="content-principal content">
          <Question
            setBudget={setBudget}
            setRemaining={setRemaining}
          />
          <div className="row">
            <div className="one-half column">
              <Form/>
            </div>
            <div className="one-half column">
              2
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
