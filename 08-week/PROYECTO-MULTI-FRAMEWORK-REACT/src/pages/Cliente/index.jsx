import React, { useState } from "react";

function Cliente() {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Cliente: ${nombre}, Empresa: ${empresa}`);
    setNombre("");
    setEmpresa("");
  };

  return (
    <div>
      <h2>Sección Cliente</h2>
      <p>Información del cliente aquí...</p>

      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          required 
        />

        <label>Empresa:</label>
        <input 
          type="text" 
          value={empresa} 
          onChange={(e) => setEmpresa(e.target.value)} 
          required 
        />

        <button type="submit">Agregar Cliente</button>
      </form>
    </div>
  );
}

export default Cliente;
