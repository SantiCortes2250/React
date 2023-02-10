import React from 'react'


const Form = () => {
  return (
    <div className="row">
        <div className="col s12 m8 offset-m2">
            <form>
                <h2>Categories</h2>
                <div className="input-field col s12">
                    <input
                        type='submit'
                        className='btn-large amber darken-2'
                        value='Search'
                     />
                </div>
            </form>
        </div>
        

    </div>
  )
}

export default Form