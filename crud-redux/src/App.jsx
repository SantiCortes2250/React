import React from "react";
import Header from "./components/Header";
import Productos from "./components/Productos";
import NuevoProducto from "./components/NuevoProducto";
import EditarProducto from "./components/EditarProducto";
import {
   BrowserRouter,
   Routes, 
   Route 
} from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Productos/>}/>
          <Route exact path="/productos/nuevo" element={<NuevoProducto/>}/>
          <Route exact path="/productos/editar/:id" element={<EditarProducto/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
