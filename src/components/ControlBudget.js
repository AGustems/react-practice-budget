import React from 'react'
import PropTypes from 'prop-types'
import {checkBudget} from '../helpers'

const ControlBudget = ({budget, remaining}) => {
    return (
        <>
            <div className="alert alert-primary">
                Budget: $ {budget}
            </div>
            <div className={checkBudget(budget, remaining)}>
                Remaining: $ {remaining}
            </div>
        </>
    )
}

ControlBudget.propTypes = {
    budget: PropTypes.number.isRequired,
    remaining: PropTypes.number.isRequired
}

export default ControlBudget
