import React from 'react'

const Form = () => {
  return (
    <form
    className='col-12'>
        <fieldset className='center'>
            <legend>Search drinks for category or ingredient</legend>

        </fieldset>
        <div className="row">
            <div className="col-md-4">
                <input 
                type="text"
                className='form-control'
                name='nombre'
                placeholder='search ingredients' />
            </div>
            <div className="col-md-4">
                <select
                className='form-control'
                name='categoria'>
                    <option value="">--Select Category--</option>
                </select>
            </div>
            <div className="col-md-4">
                <input 
                type="submit"
                className='btn btn-block btn-primary' 
                value='search drinks'
                />
            </div>
        </div>
    </form>
  )
}

export default Form