import React from 'react'

const NewProject = () => {
  return (
    <div>
        <form>
            <input 
            type="text"
            className='name-project' 
            placeholder='Name Project'
            name='name'/>
            <button>create project</button>
        </form>
    </div>
  )
}

export default NewProject