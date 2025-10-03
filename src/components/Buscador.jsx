import React from "react";
import "../styles/Buscador.css"; // Import your custom CSS

const Buscador = ({ busqueda, setBusqueda }) => {
  return (
    <div className="buscador-container">
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder="Ingresa el nombre del gatito..."
        className="buscador-input"
      />
    </div>
  );
};

export default Buscador;
