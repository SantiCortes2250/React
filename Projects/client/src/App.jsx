import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NewAccount from "./components/auth/NewAccount";
import Dashboard from "./components/Pages/Dashboard";
import Profile from "./components/Pages/Profile";
import Projects from "./components/Pages/Projects";
import ProyectoState from "./context/proyectos/ProyectoState";
import TareaState from "./context/tareas/tareaState";
import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/autenticacion/AuthState";
import tokenAuth from "./components/config/token";



//Revisar si tenemos un Token

const token = localStorage.getItem('token');

if(token){
  tokenAuth(token)

}



const App = () => {
  



  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/new-account" element={<NewAccount />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/profile" element={<Profile />} />
            </Routes>
          </BrowserRouter>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
};

export default App;
