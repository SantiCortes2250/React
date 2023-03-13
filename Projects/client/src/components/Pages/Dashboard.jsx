import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className="cards">
        <div className="card">
          <div className="info">
            <p>nombre proyecto</p>
            <h2>Nombre Tarea</h2>
            <p>Estado</p>
          </div>
          <div className="modificar">
            <button>borrar</button>
            <button>Editar</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Dashboard