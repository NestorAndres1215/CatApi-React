import React from "react";
import "../styles/ModalDetalle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCat,
  faGlobeAmericas,
  faHeartbeat,
  faAlignLeft,
  faSmile,
  faExternalLinkAlt,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const ModalDetalle = ({ open, handleClose, raza }) => {
  if (!raza || !open) return null;

  const imagenURL = raza.reference_image_id
    ? `https://cdn2.thecatapi.com/images/${raza.reference_image_id}.jpg`
    : "https://via.placeholder.com/400x300?text=Sin+Imagen";

  return (
    <div className={`modal ${open ? "open" : ""}`} onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-columns">
          {/* Columna imagen */}
          <div className="modal-column-image">
            <img src={imagenURL} alt={raza.name} className="modal-img" />
            <h2 className="modal-title">
              <FontAwesomeIcon icon={faCat} style={{ marginRight: "8px", color: "#3498db" }} />
              {raza.name}
            </h2>
            <p className="modal-info">
              <FontAwesomeIcon icon={faGlobeAmericas} style={{ marginRight: "5px", color: "green" }} />
              Origen: {raza.origin} |{" "}
              <FontAwesomeIcon icon={faHeartbeat} style={{ marginRight: "5px", color: "crimson" }} />
              Vida: {raza.life_span} años
            </p>
          </div>

          {/* Columna detalles */}
          <div className="modal-column-details">
            <h3>
              <FontAwesomeIcon icon={faAlignLeft} style={{ marginRight: "6px", color: "#2980b9" }} />
              Descripción
            </h3>
            <p>{raza.description}</p>

            <h3>
              <FontAwesomeIcon icon={faSmile} style={{ marginRight: "6px", color: "#f39c12" }} />
              Temperamento
            </h3>
            <p>{raza.temperament}</p>

            {/* Botones */}
            <div className="modal-buttons">
              <button
                className="modal-btn"
                onClick={() => window.open(raza.wikipedia_url, "_blank")}
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{ marginRight: "6px" }} />
                Wikipedia
              </button>
              <button className="modal-close-btn" onClick={handleClose}>
                <FontAwesomeIcon icon={faTimes} style={{ marginRight: "6px" }} />
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetalle;
