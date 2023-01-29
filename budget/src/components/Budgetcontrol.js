import React from 'react'
import {reviewbudget} from '../helpers'
import PropTypes from 'prop-types'

const Budgetcontrol = ({budget, remaining}) => {
  return (
    <>
    <div className="alert alert-primary">
        Budget:  ${budget}      
    </div>
    <div className={reviewbudget(budget, remaining)}>
        Remainig: ${remaining}
    </div>
    </>
  )
}

Budgetcontrol.propTypes = {
    remaining: PropTypes.number.isRequired,
    budget: PropTypes.number.isRequired
}

export default Budgetcontrol