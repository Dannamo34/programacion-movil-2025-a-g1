import React, { useState } from "react";

function Estudiante() {
  const [nombre, setNombre] = useState("");
  const [carrera, setCarrera] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Estudiante: ${nombre}, Carrera: ${carrera}`);
    setNombre("");
    setCarrera("");
  };

  return (
    <div>
      <h2>Sección Estudiante</h2>
      <p>Información del estudiante aquí...</p>

      <form onSubmit={handleSubmit}>
        <label>Nombre del Estudiante:</label>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          required 
        />

        <label>Carrera:</label>
        <input 
          type="text" 
          value={carrera} 
          onChange={(e) => setCarrera(e.target.value)} 
          required 
        />

        <button type="submit">Agregar Estudiante</button>
      </form>
    </div>
  );
}

export default Estudiante;
