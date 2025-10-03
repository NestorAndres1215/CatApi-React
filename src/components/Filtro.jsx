import React from "react";
import "../styles/Filtro.css"; // Import your custom CSS

const Filtro = ({ filtro, setFiltro }) => {
  const filtros = ["todos", "jugueton", "tranquilo", "social"];

  return (
    <div className="filtro-container">
      {filtros.map((f) => (
        <button
          key={f}
          className={`filtro-button ${filtro === f ? "selected" : ""}`}
          onClick={() => setFiltro(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default Filtro;
