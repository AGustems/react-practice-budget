import React, {useState} from 'react'

const Form = () => {
    return (
        <form>
            <h2>Add your expenses here</h2>
            <div className="field">
                <label>Name of the Expense</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ex: Transport"
                />
            </div>

            <div className="field">
                <label>Expense Quantity</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ex: 300"
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

export default Form
