import React, {useState} from 'react'
import shortid from 'shortid'
import Error from './Error'
import PropTypes from 'prop-types'


const Form = ({setCost, setCreateCost}) => {

  const [name, setName] = useState("")
  const [amount, setAmount] = useState(0)
  const [error, setError] = useState(false)
  

  const handleSubmit = (e) =>{
    e.preventDefault()

    //validation
    if(amount < 1 || isNaN(amount) || name.trim() === ''){
      setError(true)
      return;
    }

    setError(false)

    //build cost
    const cost = {
      name,
      amount,
      id: shortid.generate()
    }

    //pass the costs to the app.js component
    setCost(cost)
    setCreateCost(true)

    //reset form
    setName('')
    setAmount(0)

  }

  return (
    <form 
    onSubmit={handleSubmit}
    >
        <h2>add your expenses</h2>
        {error ? <Error message='both fields are required or incorrect budget'/>: null}
        <div className="campo">
            <label>expense name</label>
            <input
             type="text"
             className='u-full-width'
             placeholder='Ex. Food'
             value={name}
             onChange={e=> setName(e.target.value)}
            />
        </div>
        <div className="campo">
            <label>amount spent</label>
            <input
             type="number"
             className='u-full-width'
             placeholder='Ex. 300'
             value={amount}
             onChange={e=> setAmount(parseInt(e.target.value, 10))}
            />
        </div>
        <input
         type="submit"
         className='button-primary u-full-width' 
         value='add expense'
        />
    </form>

  )
}

Form.propTypes = {
  setCreateCost: PropTypes.func.isRequired,
  setCost: PropTypes.func.isRequired
}

export default Form