import React from "react";
import "../styles/Paginacion.css"; // Importa tus estilos personalizados

const Paginacion = ({ paginaActual, setPaginaActual, totalPaginas }) => {
  return (
    <div className="paginacion-container">
      {/* Botones de páginas */}
      <div className="paginacion-buttons">
        {Array.from({ length: totalPaginas }, (_, i) => (
          <button
            key={i + 1}
            className={`paginacion-btn ${paginaActual === i + 1 ? "active" : ""}`}
            onClick={() => setPaginaActual(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Información de página */}
      <div className="paginacion-info">
        <span>
          Página {paginaActual} de {totalPaginas}
        </span>
      </div>
    </div>
  );
};

export default Paginacion;
