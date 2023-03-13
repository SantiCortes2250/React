import React from 'react'
import NewProject from './NewProject'

const Sidebar = () => {
  return (
    <div>
        <div className="logo">

        </div>
            <a>Dashboard</a>
            <a>Projects</a>
            <div className='projects'>
                <a>Proyecto React</a>
                <a>Proyecto React</a>
                <a>Proyecto React</a>
            </div>
            <a>New Project</a>
            <NewProject/>
    </div>
  )
}

export default Sidebar