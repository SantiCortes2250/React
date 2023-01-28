import React, { useState, useEffect } from "react";
import Appointments from "./components/Appointments";
import Form from "./components/Form";

export const App = () => {
  //appointments in localStorage

  let initialAppointments = JSON.parse(localStorage.getItem("appointments"));
  if (!initialAppointments) {
    initialAppointments = [];
  }

  const [appointments, setAppointments] = useState(initialAppointments);

  //UseState to perform certain operations when the state changes
  useEffect(() => {
    if (initialAppointments) {
      localStorage.setItem("appointments", JSON.stringify(appointments));
    } else {
      localStorage.setItem("appointments", JSON.stringify([]));
    }
  }, [appointments, initialAppointments]);

  //create Appointmens
  const createAppointmens = (appointment) => {
    setAppointments([
        ...appointments, 
        appointment]
      );
  };

  //Delete appointmen
  const DeleteAppointmen = (id) => {
    const NewAppointments = appointments.filter((appointment) => appointment.id !== id);
    setAppointments(NewAppointments);
  };

  const title = appointments.length === 0 ? "no appointments" : "manage your appointments";

  return (
    <>
      <h1>Patient Administration</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointmens={createAppointmens} />
          </div>

          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map((appointment) => (
              <Appointments
                key={appointment.id}
                appointment={appointment}
                DeleteAppointmen={DeleteAppointmen}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
