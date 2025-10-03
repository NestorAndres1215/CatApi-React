import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faCat, faBed, faUsers } from "@fortawesome/free-solid-svg-icons";
import "../styles/Filtro.css"; // Import your custom CSS

const Filtro = ({ filtro, setFiltro }) => {
  const filtros = [
    { name: "todos", icon: faPaw },
    { name: "jugueton", icon: faCat },
    { name: "tranquilo", icon: faBed },
    { name: "social", icon: faUsers },
  ];

  return (
    <div className="filtro-container">
      {filtros.map((f) => (
        <button
          key={f.name}
          className={`filtro-button ${filtro === f.name ? "selected" : ""}`}
          onClick={() => setFiltro(f.name)}
        >
          <FontAwesomeIcon icon={f.icon} />
          {f.name}
        </button>
      ))}
    </div>
  );
};

export default Filtro;