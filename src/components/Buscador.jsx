import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // Importamos el icono de lupa
import "../styles/Buscador.css"; // Importa tu CSS personalizado

const Buscador = ({ busqueda, setBusqueda }) => {
  return (
    <div className="buscador-container">
      <div className="buscador-input-wrapper">
        <FontAwesomeIcon icon={faSearch} className="buscador-icon" />
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Ingresa el nombre del gatito..."
          className="buscador-input"
        />
      </div>
    </div>
  );
};

export default Buscador;
