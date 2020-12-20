import React, {useState, useEffect} from "react"
import Question from "./components/Question"
import Form from "./components/Form"
import List from "./components/List"
import ControlBudget from "./components/ControlBudget"

function App() {
  // Define the budget state
  const [budget, setBudget] = useState(0)
  const [remaining, setRemaining] = useState(0)
  const [question, setQuestion] = useState(true)
  const [expenses, setExpenses] = useState([])
  const [expense, setExpense] = useState({})
  const [createExpense, setCreateExpense] = useState(false)
  
  // useEffect that tracks the remaining money
  useEffect(() => {
    if(createExpense === true){      
      // Add new expense
      setExpenses(state => ([
        ...state,
        expense
      ]))

      // Substracts the expense from the remaining
      const remainingBudget = remaining - expense.quantity
      setRemaining(remainingBudget)

      // Reset the state
      setCreateExpense(false)
    }
  }, [expense, createExpense, remaining])

  return (
    <div className="container">
      <header>
        <h1>Weekly Expenses</h1>
        <div className="content-principal content">
          {question ? (
            <Question
            setBudget={setBudget}
            setRemaining={setRemaining}
            setQuestion={setQuestion}
          />
          ) : (
            <div className="row">
            <div className="one-half column">
              <Form 
                setExpense={setExpense}
                setCreateExpense={setCreateExpense}  
                />
            </div>
            <div className="one-half column">
              <List
                expenses={expenses}
              />
              <ControlBudget 
                budget={budget}
                remaining={remaining}
              />
            </div>
          </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
