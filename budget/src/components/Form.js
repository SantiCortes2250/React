import React from 'react'

const Form = () => {
  return (
    <form >
        <h2>add your expenses</h2>
        <div className="campo">
            <label>expense name</label>
            <input
             type="text"
             className='u-full-width'
             placeholder='Ex. Food'
            />
        </div>
        <div className="campo">
            <label>amount name</label>
            <input
             type="number"
             className='u-full-width'
             placeholder='Ex. 300'
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

export default Form