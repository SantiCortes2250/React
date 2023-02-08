import React, {useState} from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Questions = ({budget, remaining, question}) => {

    const [amount, setAmount] = useState(0)
    const [error, setError] = useState(false)

    const HandleChange = (e) =>{
        setAmount(parseInt(e.target.value, 10))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()

        //validation
        if(amount < 1 || isNaN( amount )){
            setError(true)
            return;
        }

        setError(false)
        budget(amount)
        remaining(amount)
        question(false)

        

    }

  return (
    <>
        <h2>Place your budget</h2>
        {error ? <Error message='The budget is wrong'/> : null}
        <form
        onSubmit={handleSubmit}
        >
            <input 
            type="number"
            className='u-full-width'
            placeholder='Place your budget' 
            onChange={HandleChange}
            
            />
            <input 
            type="submit"
            className='button-primary u-full-width'
            value='Define budget'

             />

        </form>
    </>
  )
}

Questions.propTypes = {
    budget: PropTypes.func.isRequired,
    remaining: PropTypes.func.isRequired,
    question: PropTypes.func.isRequired
}

export default Questions