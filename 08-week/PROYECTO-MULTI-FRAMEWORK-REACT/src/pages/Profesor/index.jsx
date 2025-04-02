import React, { useState } from "react";

function Profesor() {
  const [nombre, setNombre] = useState("");
  const [materia, setMateria] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Profesor: ${nombre}, Materia: ${materia}`);
    setNombre("");
    setMateria("");
  };

  return (
    <div>
      <h2>Sección Profesor</h2>
      <p>Información del profesor aquí...</p>

      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          required 
        />

        <label>Materia:</label>
        <input 
          type="text" 
          value={materia} 
          onChange={(e) => setMateria(e.target.value)} 
          required 
        />

        <button type="submit">Agregar Profesor</button>
      </form>
    </div>
  );
}

export default Profesor;
