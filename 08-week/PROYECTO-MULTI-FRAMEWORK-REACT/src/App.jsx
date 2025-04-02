import Profesor from './pages/Profesor'; 
import Estudiante from './pages/Estudiante';
import Proveedor from './pages/Proveedor';
import Cliente from './pages/Cliente';
import React from "react";


function App() {
  return (
    <div>
      <h1>¡Llena tu formulario!</h1>
      <Profesor />
      <Estudiante />
      <Proveedor />
      <Cliente />
    </div>
  );
}

export default App;
