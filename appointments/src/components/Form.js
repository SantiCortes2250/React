import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from 'prop-types';

const Form = ({ createAppointmens }) => {
  const [appointment, setAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    time: "",
    symptom: "",
  });

  const [error, setError] = useState(false);

  const HandleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const { pet, owner, date, time, symptom } = appointment;

  const HandleSubmit = (e) => {
    e.preventDefault();

    //validation

    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      time.trim === "" ||
      symptom === ""
    ) {
      setError(true);
      return;
    }
    setError(false);

    //generate id

    appointment.id = uuidv4();

    //create appointment

    createAppointmens(appointment);

    //restart appointment

    setAppointment({
      pet: "",
      owner: "",
      date: "",
      time: "",
      symptom: "",
    });
  };

  return (
    <>
      <h2>create appointment</h2>
      {error ? <p className="alerta-error">All fields are required</p> : null}
      <form onSubmit={HandleSubmit}>
        <label>Pet name</label>
        <input
          type="text"
          name="pet"
          placeholder="Pet name"
          className="u-full-width"
          onChange={HandleChange}
          value={pet}
        />
        <label>owner name</label>
        <input
          type="text"
          name="owner"
          placeholder="Pet owner name"
          className="u-full-width"
          onChange={HandleChange}
          value={owner}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={HandleChange}
          value={date}
        />
        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={HandleChange}
          value={time}
        />
        <label>symptom</label>
        <textarea
          className="u-full-width"
          name="symptom"
          onChange={HandleChange}
          value={symptom}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          add appointment
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
    createAppointmens: PropTypes.func.isRequired
}

export default Form;
