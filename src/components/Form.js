import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Error from './Error'
import shortid from 'shortid'

const Form = ({setExpense, setCreateExpense}) => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0)
    const [error, setError] = useState(false)
    
    // Function to add an expense
    const submitExpense = e => {
        e.preventDefault()

        // Validate
        if(quantity < 1 || isNaN(quantity) || name.trim() === ''){
            setError(true)
            return;
        }
        setError(false)

        // Build the expense (object)
        const expense = {
            name, 
            quantity, 
            id: shortid.generate()
        }

        // Pass the expense to the main component
        setExpense(expense)
        setCreateExpense(true)

        // Reset the form
        setName('')
        setQuantity(0)
    }

    return (
        <form onSubmit={submitExpense}>
            <h2>Add your expenses here</h2>
            {error ? (<Error message="All the fields are required or Incorrect Budget"/>) : null}

            <div className="field">
                <label>Name of the Expense</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ex: Transport"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="field">
                <label>Expense Quantity</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ex: 300"
                    value={quantity}
                    onChange={e => setQuantity(parseInt(e.target.value, 10))}
                />
            </div>
            <input
                type="submit"
                className="button-primary full-width"
                value="Add Expense"
            />

        </form>
    )
}

Form.propTypes = {
    setExpense: PropTypes.func.isRequired,
    setCreateExpense: PropTypes.func.isRequired
}

export default Form
