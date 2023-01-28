import React from 'react'
import PropTypes from 'prop-types';

const Appointments = ({appointment, DeleteAppointmen}) => {

    const {id, pet, owner, date, time, symptom} = appointment
  return (
    <div className='cita'>
        <p>Pet: <span>{pet}</span></p>
        <p>Owner: <span>{owner}</span></p>
        <p>Date: <span>{date}</span></p>
        <p>Time: <span>{time}</span></p>
        <p>Symptom: <span>{symptom}</span></p>

        <button
            className='button eliminar u-full-width'
            onClick={()=>DeleteAppointmen(id)}

        >Delete</button>
    </div>
  )
}

Appointments.propTypes = {
    appointment: PropTypes.object.isRequired,
    DeleteAppointmen: PropTypes.func.isRequired

}

export default Appointments