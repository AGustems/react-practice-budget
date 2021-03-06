import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

const Question = ({setBudget, setRemaining, setQuestion}) => {
    // Define the quantity budget and error states
    const [quantity, setQuantity] = useState(0)
    const [error, setError] = useState(false)
    
    // Function to read the budget
    const handleBudget = ({target}) => {
        setQuantity(parseInt(target.value, 10))
    }

    // Function to submit the budget
    const addBudget = e => {
        e.preventDefault()

        // Validation
        if(quantity < 1 || isNaN(quantity)){
            setError(true)
            return;
        }
        // If the number is correct
        setError(false)
        setBudget(quantity)
        setRemaining(quantity)
        setQuestion(false)
    }

    return (
        <>
            <h2>Insert your Budget</h2>
            {error ? <Error message="The Budget is Incorrect"/> : null}
            <form onSubmit={addBudget}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Insert your budget"
                    onChange={handleBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define Budget"
                />
            </form>
        </>
    )
}

Question.propTypes = {
    setBudget: PropTypes.func.isRequired,
    setRemaining: PropTypes.func.isRequired,
    setQuestion: PropTypes.func.isRequired
}

export default Question

