import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
import {
  MOSTRAR_TAREAS,
  AGREGAR_TAREA,
  ELIMINAR_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
} from "../../types";
import clienteAxios from "../../components/config/axios";

const TareaState = (props) => {
  const initialState = {
    tareasProyecto: [],
    tareaSeleccionada: null,
  };

  const [state, dispatch] = useReducer(tareaReducer, initialState);




  const mostrarTareas = async (project) => {
    try {
      const res = await clienteAxios.get("/api/tasks", { params: { project } });

      dispatch({
        type: MOSTRAR_TAREAS,
        payload: res.data.tasks,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const agregarTarea = async (tarea) => {
    try {
      const res = await clienteAxios.post("/api/tasks", tarea);

      dispatch({
        type: AGREGAR_TAREA,
        payload: res.data.task,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarTarea = async (id, project) => {
    try {
      await clienteAxios.delete(`/api/tasks/${id}`, { params: { project } });

      dispatch({
        type: ELIMINAR_TAREA,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  const actualizarTarea = async (tarea) => {
    try {
      const res = await clienteAxios.put(`/api/tasks/${tarea._id}`, tarea);
      
      dispatch({
        type: ACTUALIZAR_TAREA,
        payload: res.data.taskExist,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TareaContext.Provider
      value={{
        tareasProyecto: state.tareasProyecto,
        tareaSeleccionada: state.tareaSeleccionada,
        mostrarTareas,
        agregarTarea,
        eliminarTarea,
        guardarTareaActual,
        actualizarTarea,
        
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
