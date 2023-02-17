import React, {useState} from 'react'
import Error from './Error'

const Form = ({word}) => {

  const [search, setsearch] = useState('')
  const [error, seterror] = useState(false)

  const HandleSubmit = (e) =>{
    e.preventDefault()


    if(search.trim() === ''){
      seterror(true)
      return

    }

    seterror(false)

    word(search)





  }

  return (
    <form
    onSubmit={HandleSubmit}>
        <div className="row">
        <div className="form-group col-md-6">
            <input 
            type="text"
            onChange={e => setsearch(e.target.value)}
            className='form-control form-control-lg'
            placeholder='Search Images, Ex: Food'
             />
        </div>
        <div className="form-group col-md-4">
            <input 
            type="submit"
            className='btn btn-lg btn-danger btn-block'
            value='Search'
             />
        </div>

        </div>

        { error ? <Error message='Enter a value'/> : null}
        
    </form>
  )
}

export default Form