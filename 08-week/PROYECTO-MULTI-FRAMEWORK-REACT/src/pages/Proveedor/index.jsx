import React, { useState } from "react";

function Proveedor() {
  const [nombre, setNombre] = useState("");
  const [producto, setProducto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Proveedor: ${nombre}, Producto: ${producto}`);
    setNombre("");
    setProducto("");
  };

  return (
    <div>
      <h2>Sección Proveedor</h2>
      <p>Información del proveedor aquí...</p>

      <form onSubmit={handleSubmit}>
        <label>Nombre del Proveedor:</label>
        <input 
          type="text" 
          value={nombre} 
          onChange={(e) => setNombre(e.target.value)} 
          required 
        />

        <label>Producto Suministrado:</label>
        <input 
          type="text" 
          value={producto} 
          onChange={(e) => setProducto(e.target.value)} 
          required 
        />

        <button type="submit">Agregar Proveedor</button>
      </form>
    </div>
  );
}

export default Proveedor;
